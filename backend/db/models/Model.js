const mongoose = require('mongoose');

// DEFINE STRUCTURE OF USER SCHEMA 
const userSchema = new mongoose.Schema({
    firstName: {
        required: true,
        type: String,
    },
    lastName: {
        required: true,
        type: String,
    },
    phone: {
        required: true,
        type: Number,
    },
    email: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    termsAndConditions: {
        required: true,
        type: Boolean
    }
})

// MODEL NAMING WITH 'USERDATA' AND EXPORTING SCHEMA
module.exports = mongoose.model('userData', userSchema)