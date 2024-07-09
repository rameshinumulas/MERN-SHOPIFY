const mongoose = require('mongoose');

const addCartSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  cartItemId: {
    required: true,
    type: String
  },
  price: {
    required: true,
    type: Number
  },
  discountPercentage: {
    required: true,
    type: Number
  },
  brand: {
    required: false,
    type: String
  },
  category: {
    required: true,
    type: String
  },
  minimumOrderQuantity:{
    required: true,
    type: Number
  },
  thumbnail: {
    required: true,
    type: String
  },
  returnPolicy: {
    required: true,
    type: String
  },
  warrantyInformation:{
    required: false,
    type: String
  },
  shippingInformation: {
    required: false,
    type: String
  },
  availabilityStatus: {
    required: false,
    type: String
  },
  createdDate: { type: Date, default: Date.now },
})

module.exports = mongoose.model('cartItems', addCartSchema);
