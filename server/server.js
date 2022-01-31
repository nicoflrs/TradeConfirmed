const express = require('express');
const app = express()
const path = require('path');
const controller = require('./controllers/controller.js');
const fs = require('fs');
const request = require('request');
const redirect_uri = 'https://solo-project-nicoflrs.herokuapp.com/auth';

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

app.get('/homepage/auth', (req, res) => {
  console.log('here!')
  var authRequest = {
      url: 'https://api.tdameritrade.com/v1/oauth2/token',
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: {
          'grant_type': 'authorization_code',
          'access_type': 'offline',
          'code': req.query.code, // get the code from url
          'client_id': process.env.CLIENT_ID + "@AMER.OAUTHAP", // this client id comes from config vars
          'redirect_uri': redirect_uri
      }
  };

  // make the post request
  request(authRequest, function (error, response, body) {
      if (!error && response.statusCode == 200) {
          // parse the tokens
          var authReply = JSON.parse(body);
          // to check it's correct, display it
          res.send(authReply);
      }
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
})
