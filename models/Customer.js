/**
 * Customer Scheme to store customer details
 * @author Hari Priya Jupally
 */const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({

  _id: { type: Number, required: true, default: 12345 },
  firstname: {
    type: String,
    required: true,
    default: 'Hari Priya'
  },
  lastname: {
    type: String,
    required: true,
    default: 'Jupally'
  },
  age: {
    type: Number,
    required: false,
    default: 22
  },
  phonenumber: {
      type: Number,
      required: true,
      default: 00000000000
  },
  address: {
      type: String,
      required: true,
      default: 'address'
  }
})
module.exports = mongoose.model('Customer', CustomerSchema)
