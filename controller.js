const db = require('./model'); 

const controller = {};

controller.addTrade = (req, res, next) => {
    // console.log(req.body);
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

module.exports = controller;