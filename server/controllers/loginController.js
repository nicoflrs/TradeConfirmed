const db = require('../models/model');

const loginController = {};

loginController.registerUser = (req, res, next) => {
  console.log('registerUser!')
  return next();
}

loginController.authenticateUser = (req, res, next) => {
  const { username, password } = req.body
  const dbQuery = `select * from public.accounts where username = '${username}' and password = '${password}'`;
  db.query(dbQuery)
    .then(data => {
      res.locals.results = data;
      return next();
    });
}

module.exports = loginController;