const db = require('../models/model'); 

const loginController = {};

loginController.registerUser = (req, res, next) => {
    console.log('registerUser!')
    return next();
}

loginController.authenticateUser = (req, res, next) => {
    console.log('authenticateUser!')
    return next();
}

module.exports = loginController;