const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const userModel = require('../db/models/Model');
const saltRounds = 10;


router.post('/user_registration', async (req, res) => {
    let userBody = req.body;
    // ENCRYPT PASSWORD BY USING BCRYPT
    const newObj = await handleGetSalt(userBody);
   
    console.log(userBody, 'userBody', newObj);
    const saveUserData = new userModel(newObj);
    try {
        const resData = await saveUserData.save();
        res.status(201).json(resData);
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
        const userLogin = await validateUser(req.body?.password, userPresent.password);
        console.log(userLogin, 'kk');
        if (userLogin) {
            res.status(200).json({ message: 'user login successfull', userLogin: true })
        } else {
            res.status(404).json({ message: 'user not found', userLogin: false })
        }
    } catch (error) {
        
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