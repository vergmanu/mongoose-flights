const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  dest: String, 
  airport: String,
    //enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
}, {
  timestamps: true
});

const flightSchema = new Schema({
  airline: String,
    //enum: ['American', 'Southwest', 'United']
  airport: {
    type: String,
    //enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN'
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    required: true, 
  },
  departs: {
    type: Date,
    required: true
  },
  destinations: [destinationSchema], 
});

module.exports = mongoose.model('Flight', flightSchema);

