const mongoose = require('mongoose');
const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    create,
    new: newTicket
}

function create(req, res) {
    let ticket = new Ticket(req.body)
    ticket.flight = mongoose.Types.ObjectId(req.params.id)
    ticket.save(function(err, saved) {
        console.log('ERROR ' + err)
        res.redirect('/flights/' + req.params.id);
    })
}

function newTicket(req, res) {
    let flight = {id: req.params.id}
    res.render('tickets/new', {flight});
}