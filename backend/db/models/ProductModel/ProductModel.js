const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  description: {
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
  rating: {
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
  thumbnail: {
    required: true,
    type: String
  },
  images:{
    required: true,
    type: [String]
  },
  minimumOrderQuantity:{
    required: true,
    type: Number
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
  meta: {
    required: false,
    type: {}
  },
  tags: {
    required: false,
    type: [String]
  },
  createdDate: { type: Date, default: Date.now },
})

module.exports = mongoose.model('productInfo', productSchema)