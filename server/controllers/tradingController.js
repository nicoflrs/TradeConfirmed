const db = require('../models/model'); 
const https = require('https');

const tradingController = {};

tradingController.addTrade = (req, res, next) => {
    const {Position, NumContracts, Strategy, DateBTOSTO, DateBTCSTC} = req.body;
  const addChar =   
    `INSERT INTO public.trading (position, numcontracts, strategy, datebtosto, datebtcstc)
    VALUES ('${Position}', '${NumContracts}', '${Strategy}', '${DateBTOSTO}', '${DateBTCSTC}')`;
    db.query(addChar)
    .then(data => {
      return next();
    });
};

tradingController.viewTrades = (req, res, next) => {
  const {user_id} = req.body;
  const dbQuery = `select * from public.trading where user_id = '${user_id}' order by _id desc`;
  console.log('trading controller?')
  db.query(dbQuery)
    .then(data => {
      console.log('DATA: ', data)
      res.locals.results = data;
      return next();
    });
};

tradingController.deleteTrade = (req, res, next) => {
  const deleteQuery = `DELETE FROM public.trading WHERE _id = ${req.body.id};`
  db.query(deleteQuery)
  .then(data => {
    return next();
  });
};

tradingController.updateTrade = (req, res, next) => {
  const updateQuery = 
  `UPDATE public.trading
  SET ${req.body.columnName} = '${req.body.text}'
  WHERE _id = ${req.body._id};`
  db.query(updateQuery)
  .then(data => {
    return next();
  });
 };

module.exports = tradingController;