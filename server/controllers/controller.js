const db = require('../models/model'); 
const https = require('https')

const controller = {};

controller.addTrade = (req, res, next) => {
    console.log('here');
    const {Position, NumContracts, Strategy, DateBTOSTO, DateBTCSTC} = req.body;
  const addChar =   
    `INSERT INTO public.trading (position, numcontracts, strategy, datebtosto, datebtcstc)
    VALUES ('${Position}', '${NumContracts}', '${Strategy}', '${DateBTOSTO}', '${DateBTCSTC}')`;
    db.query(addChar)
    .then(data => {
      return next();
    });
}

controller.viewTrades = (req, res, next) => {
  const dbQuery = `select * from public.trading`;
  db.query(dbQuery)
    .then(data => {
      res.locals.results = data;
      return next();
    });
}

controller.deleteTrade = (req, res, next) => {
  const deleteQuery = `DELETE FROM public.trading WHERE _id = ${req.body.id};`
  db.query(deleteQuery)
  .then(data => {
    return next();
  })
}

controller.updateTrade = (req, res, next) => {
  const updateQuery = 
  `UPDATE public.trading
  SET ${req.body.columnName} = '${req.body.text}'
  WHERE _id = ${req.body._id};`
  db.query(updateQuery)
  .then(data => {
    return next();
  })
 }

controller.getOptionsData = (req, res, next) => {
  var todayDate = new Date().toISOString().slice(0, 10);
  console.log(todayDate);
  // console.log(res.locals.spy = 'lol');
  const url = `https://api.tdameritrade.com/v1/marketdata/chains?apikey=${process.env.CONSUMER_KEY}&symbol=SPY&toDate=` + todayDate;
  let data = '';
  https.get(url, response => {
    response.on('data', chunk => {
      data += chunk;
    });
    response.on('end', () => {
      data = JSON.parse(data);
      res.locals.spy = data
      next()
    })
  }).on('error', err => {
    console.log(err.message);
  })
  // res.locals.spy = data
  // console.log(res.locals.spy)
  // res.locals.spy = data//{symbol: data.symbol, tradingPrice: data.underlyingPrice, daysToExpiration:data.daysToExpiration, putStrikes: data.putExpDateMap, callStrikes: data.callExpDateMap}
  // next();
  
}

module.exports = controller;