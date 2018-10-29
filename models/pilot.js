const mongoose = require('mongoose')

const PilotSchema = new mongoose.Schema({

  _id: { type: Number, required: true },
  lastName: {
    type: String,
    required: true,
    default: 'Smith'
  }, firstName: {
    type: String,
    required: true,
    default: 'Jane'
  }, 
  hoursFlown: {
    type: Number,
    required: false,
    default:4
  },
  isCurrent: { // current to fly, legitimate medical, hasn't drunk alcohol in the last 8 hours, etc.
    type: Boolean,
    required: true,
    default: false
  }
})
module.exports = mongoose.model('Pilot', PilotSchema)
