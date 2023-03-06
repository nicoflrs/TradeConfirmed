const express = require('express');
const app = express();
const path = require('path');
const tradingController = require('./controllers/tradingController.js');
const loginController = require('./controllers/loginController.js');

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../build/index.html'));
});

/*TRADING CONTROLLER*/
app.post('/submit-form', tradingController.addTrade, (req, res) => {
  console.log('Success!')
});

app.post('/log', tradingController.viewTrades, (req, res) => {
  return res.send(res.locals.results.rows);
});

app.post('/delete', tradingController.deleteTrade, tradingController.viewTrades, (req, res) => {
  return res.send(res.locals.results.rows);
});

app.put('/update', tradingController.updateTrade, tradingController.viewTrades, (req, res) => {
  return res.send(res.locals.results.rows);
});

/*LOGIN CONTROLLER*/
app.post('/register-user', loginController.registerUser, (req, res) => {
  return res.send(res);
});

app.post('/authenticate-user', loginController.authenticateUser, (req, res) => {
  if (res.locals.results.rowCount === 1) {
    return res.status(200).send(res.locals.results.rows);
  }
  else {
    return res.status(400).send('Invalid username or password')
  }
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
