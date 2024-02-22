const express = require('express');

const router = express.Router();
const userModel = require('../db/models/Model');


router.post('/user_registration', async (req, res) => {
    let userBody = req.body;
    const saveUserData = new userModel(userBody);
    
    try {
        const resData = await saveUserData.save();
        res.status(201).json(resData);
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message });
    }
})

module.exports = router;