/**
 * Product schema to store all product details by using mongoose 
 * @author Gangapatnam, Vamse Krishna
 */
const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({

  _productid: { type: Number, required: true },
  productName: {
    type: String,
    required: true,
    default: 'DELL-LAPTOP'
  }, 
  productDescription: {
    type: String,
    required: true,
    default: 'TOP brabded Laptop'
  }, 
  price: {
    type: Number,
    required: false,
    default:1000,
    min: 0,
    max: 50000
  },
  productCategory: { 
    type: String,
    required: true,
    default: 'Laptops'
  },
  sellerId: { 
    type: Number,
    required: true,
  }
})
module.exports = mongoose.model('Product', ProductSchema)