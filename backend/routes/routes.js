const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const userModel = require('../db/models/Model');
const userFavoritesSchema = require('../db/models/favoritesModel/favoritesModel');
const productCreateSchema = require('../db/models/ProductModel/ProductModel');
const addItemToCart = require('../db/models/orderRelated/addCartModel');
const saltRounds = 10;
const secreteKeyForJWT = 'vizagshoperstop';

router.post('/user_registration', async (req, res) => {
  let userBody = req.body;
  // ENCRYPT PASSWORD BY USING BCRYPT
  const newObj = await handleGetSalt(userBody);
  const saveUserData = new userModel(newObj);

  try {
    const userCheck = await userModel.findOne({ email: userBody?.email }, {}, {})
    if (userCheck) {
      res.status(200).json({ data: {}, message: 'User already exists with same email id.', userRegistration: false })
      return
    }
    const resData = await saveUserData.save();
    let token;
    token = jwt.sign(
      {
        userId: resData.id,
        email: resData.email
      },
      secreteKeyForJWT,
      { expiresIn: '4m' }
    )
    res.status(201).json({ data: resData, message: 'User registration successful !', userRegistration: true, token });
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error.message });
  }
})

router.post('/user_login', async (req, res) => {
  const query = { email: req.body.email };
  try {
    // FIND USER IS PRESENT OR NOT IN DB;
    const userPresent = await userModel.findOne(query, {}, {});
    // CHECK USER PASSWORD CORRECT OR INCORRECT
    if (!userPresent) {
      res.status(200).json({ message: 'User not found with given email and password.', userLogin: false });
      return;
    }
    const userLogin = await validateUser(req.body?.password, userPresent.password);
    let token;
    token = jwt.sign(
      {
        userId: userPresent.id,
        email: userPresent.email
      },
      secreteKeyForJWT,
      { expiresIn: '1h' }
    )
    if (userLogin) {
      res.status(200).json({ message: 'User login successfull', userLogin: true, token, profile: userPresent })
    } else {
      res.status(200).json({ message: 'Password incorrect please check it.', userLogin: false })
    }
  } catch (error) {
    console.log(error, 'error')
    res.status(400).json({ message: error.message, userLogin: false })
  }
})

router.post('/product/create', async (req, res) => {
  try {
    let productInfo = req.body;
    await productCreateSchema.insertMany(productInfo);
    res.status(200).json({ message: 'Successfully created....' })
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error })
  }
})

router.get('/user/profile', async (req, res) => {
  let token = req.headers.authorization.split(' ')[1]
  try {
    const decodeToken = jwt.verify(token, secreteKeyForJWT);
    const userDetails = await userModel.findOne({ _id: decodeToken.userId }, {});
    res.status(200).json({ data: userDetails, message: 'Successfully fetched user details' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ data: error })
  }
})

router.get('/product/get', async (req, res) => {
  try {
    let categoriesList = await productCreateSchema.distinct("category");
    let reqCategory = {};
    let token = req.headers.authorization.split(' ')[1]
    const decodeToken = token;
    //  jwt.verify(token, secreteKeyForJWT);

    if (req.query?.category) {
      reqCategory = {
        category: req.query?.category
      }
    }
    let productList = await productCreateSchema.find(reqCategory, {});
    res.status(200).json({ data: productList, message: '', categoriesList, decodeToken })
  } catch (error) {
    res.status(400).json({ data: error, message: '' })
  }
})

router.get('/product/getInfo/:id', async (req, res) => {
  let productId = req.params.id;
  try {
    const productInfo = await productCreateSchema.find({ _id: productId }, {});
    res.status(200).send({ data: productInfo?.[0], message: 'success' });
  } catch (error) {
    res.status(400).send({ data: error, message: 'success' });
  }
})

router.post('/product/addUserFavorites', async (req, res) => {
  try {
    const favoriteBody = req.body;
    const saveFavorite = new userFavoritesSchema(favoriteBody);
    const myFavorites = await saveFavorite.save();
    let token = req.headers.authorization.split(' ')[1];
    //DECODE TOKEN
    const decodeToken = jwt.verify(token, secreteKeyForJWT);
    res.status(201).json({ data: myFavorites, message: 'Successfully added your favorite', decodeToken });
  } catch (error) {
    res.status(400).json({ data: error });
  }
});

router.get('/product/getFavoritesByuser/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    console.log(req.query, 'eeee')
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, secreteKeyForJWT);
    console.log(token, userId)
    const allFavorites = await userFavoritesSchema.find({ userId, productId: req.query.productId }, {});
    console.log(allFavorites, 'jjjj');
    res.status(200).json({ data: allFavorites, message: 'Successfully fetched data' });
  } catch (error) {
    res.status(400).json({ data: error })
  }
});

router.post('/product/addToCart', async (req, res) => {
  console.log(req.body)
  try {
    const saveCartItem = addItemToCart(req.body);
    const resItemData = saveCartItem.save();
    res.status(201).json({ message: 'Added to cart', data: resItemData })
  } catch(error) {
    res.status(400).json({ message: error })
  }
})

const validateUser = async (userPassword, dbPassword) => {
  try {
    const salt = await bcrypt.compare(userPassword, dbPassword)
    console.log(salt, 'jj');
    return salt;
  } catch (err) {
    console.log(err);
  }
  // .then(res => {
  //   console.log(res) // return true
  // })
  // .catch(err => console.error(err.message)) 
}

const handleGetSalt = async (userBody) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(userBody.password, salt);
    console.log('Hash: ', hash);
    userBody = {
      ...userBody,
      password: hash
    };
    return userBody;
  } catch (err) {
    console.error(err.message);
    throw err; // Rethrow the error to handle it outside
  }
}

module.exports = router;