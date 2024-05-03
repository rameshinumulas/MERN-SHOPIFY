const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const userModel = require('../db/models/Model');
const productCreateSchema = require('../db/models/ProductModel/ProductModel')
const saltRounds = 10;

router.post('/create/product', async (req, res) => {
    try {
        let productInfo = req.body;
        await productCreateSchema.insertMany(productInfo);
        res.status(200).json({ message: 'Successfully created....' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error })
    }
})
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
        res.status(201).json({ data: resData, message: 'User registration successful !', userRegistration: true });
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
            res.status(200).json({ message: 'user not found with given email and password.', userLogin: false });
            return;
        }
        const userLogin = await validateUser(req.body?.password, userPresent.password);
        console.log(userLogin, 'kk');
        if (userLogin) {
            res.status(200).json({ message: 'user login successfull', userLogin: true })
        } else {
            res.status(200).json({ message: 'Password incorrect please check it.', userLogin: false })
        }
    } catch (error) {
        console.log(error, 'error')
        res.status(400).json({ message: error.message, userLogin: false })
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