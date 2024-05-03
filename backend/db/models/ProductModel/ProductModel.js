const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  producTitle: {
    required: true,
    type: String
  },
  productDescription: {
    required: true,
    type: String
  },
  productPrice: {
    required: true,
    type: Number
  },
  discountPercentage: {
    required: true,
    type: Number
  },
  productRating: {
    required: true,
    type: Number
  },
  productBrand: {
    required: true,
    type: String
  },
  productCategory: {
    required: true,
    type: String
  },
  thumbnail: {
    required: true,
    type: String
  },
  productImages:{
    required: true,
    type: [String]
  },
  createdDate: { type: Date, default: Date.now },
})

module.exports = mongoose.model('productInfo', productSchema)