const express = require('express');
const app = express()
const path = require('path');
const controller = require('./controller.js');
const fs = require('fs');
const request = require('request');


app.use(express.json())

app.use(express.urlencoded({
  extended: true
}))

app.use('/build', express.static(path.join(__dirname, './build')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, './index.html'));
})

app.post('/submit-form', controller.addTrade, (req, res) => {
  res.send('doneski')
})

app.get('/log', controller.viewTrades, (req, res) => {
  console.log(res.locals.results.rows)
  return res.send(res.locals.results.rows)
})

app.listen(3000, () => {
  console.log("listening on port 3000");
})
