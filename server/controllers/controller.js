const db = require('../models/model'); 
const https = require('https');

const controller = {};

controller.addTrade = (req, res, next) => {
    const {Position, NumContracts, Strategy, DateBTOSTO, DateBTCSTC} = req.body;
  const addChar =   
    `INSERT INTO public.trading (position, numcontracts, strategy, datebtosto, datebtcstc)
    VALUES ('${Position}', '${NumContracts}', '${Strategy}', '${DateBTOSTO}', '${DateBTCSTC}')`;
    db.query(addChar)
    .then(data => {
      return next();
    });
};

controller.viewTrades = (req, res, next) => {
  const dbQuery = `select * from public.trading order by _id desc`;
  db.query(dbQuery)
    .then(data => {
      res.locals.results = data;
      return next();
    });
};

controller.deleteTrade = (req, res, next) => {
  const deleteQuery = `DELETE FROM public.trading WHERE _id = ${req.body.id};`
  db.query(deleteQuery)
  .then(data => {
    return next();
  });
};

controller.updateTrade = (req, res, next) => {
  const updateQuery = 
  `UPDATE public.trading
  SET ${req.body.columnName} = '${req.body.text}'
  WHERE _id = ${req.body._id};`
  db.query(updateQuery)
  .then(data => {
    return next();
  });
 };

module.exports = controller;