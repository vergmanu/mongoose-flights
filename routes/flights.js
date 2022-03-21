var express = require('express');
const flightss = require('../controllers/flights');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create)

module.exports = router;
