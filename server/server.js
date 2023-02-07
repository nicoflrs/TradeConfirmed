const express = require('express');
const app = express()
const path = require('path');
const controller = require('./controllers/controller.js');

app.use(express.json())

app.use(express.urlencoded({
  extended: true
}))

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../build/index.html'));
})

app.post('/submit-form', controller.addTrade, (req, res) => {
  return res.redirect('http://localhost:3000/');
})

app.get('/log', controller.viewTrades, (req, res) => {
  return res.send(res.locals.results.rows)
})

app.post('/delete', controller.deleteTrade, controller.viewTrades, (req, res) => {
  return res.send(res.locals.results.rows)
})

app.put('/update', controller.updateTrade, controller.viewTrades, (req, res) => {
  return res.send(res.locals.results.rows)
})

app.listen(3000, () => {
  console.log("listening on port 3000");
})
