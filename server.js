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
  console.log('you did it!')
  res.send('doneski')
})

app.listen(3000, () => {
  console.log("listening on port 3000");
})
