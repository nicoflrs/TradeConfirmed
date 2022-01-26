const db = require('./model'); 

const controller = {};

controller.addTrade = (req, res, next) => {
    // console.log(req.body);
    const {Position, NumContracts, Strategy, DateBTOSTO, DateBTCSTC} = req.body;
    console.log(Position, NumContracts, Strategy, DateBTOSTO, DateBTCSTC)
  const addChar =   
    `INSERT INTO public.trading (position, numcontracts, strategy, datebtosto, datebtcstc)
    VALUES ('${Position}', '${NumContracts}', '${Strategy}', '${DateBTOSTO}', '${DateBTCSTC}')`;
    db.query(addChar)
    .then(data => {
        console.log('here?')
      return next();
    });
}

module.exports = controller;