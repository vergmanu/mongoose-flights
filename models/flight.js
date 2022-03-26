const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const destinationSchema = new Schema({
  dest: String, 
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  arrival: Date
});



const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  }, 
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN'
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    required: true
  },
  departs: {
    type: Date,
    default: function() {
      const thisDate = new Date();
      return thisDate.setFullYear(thisDate.getFullYear + 1)
    }
  }, 
  destinations: [destinationSchema],
});



module.exports = mongoose.model('Flight', flightSchema);

