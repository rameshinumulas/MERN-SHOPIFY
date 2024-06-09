const mongoose = require('mongoose');

// DEFINE USER FAVORITE SCHEMA
const favoriteSchema = new mongoose.Schema({
  userId: {
    required: true,
    type: String
  },
  productId: {
    required: true,
    type: String
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('UserFavorites', favoriteSchema)