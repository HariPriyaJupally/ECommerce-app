/** 
*  Order model
*  Describes the characteristics of each attribute in an order resource.
*
* @author Amy White
*
*/

// bring in mongoose 
// see <https://mongoosejs.com/> for more information
const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({

  _id: { type: Number, required: true },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
      type: String,
      required: true
  },
  datePlaced: {
    type: Date,
    required: true,
    default: Date.now()
  },
  dateShipped: {
    type: Date,
    required: false
  },
  paymentType: {
    type: String,
    enum: ['not selected yet', 'credit card', 'cash', 'check'],
    required: true,
    default: 'not selected yet'
  },
  paid: {
    type: Boolean,
    default: false
  }
})
module.exports = mongoose.model('Order', orderSchema)