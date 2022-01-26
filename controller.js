const db = require('./model'); 

const controller = {};

controller.addTrade = (req, res, next) => {
    console.log(req.body);
    // const tradeSubmission = ``
    next();
}

module.exports = controller;