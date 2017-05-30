const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/set', (req,res,next) => {
  res.cookie('foo', 'bar').send();
  //res.sendStatus(200);
});

app.get('/read', (req,res,next) => {
  let cookie = req.cookies;
  res.send(cookie);
});

app.get('/clear', (req,res,next) => {
  res.clearCookie('deleteMe').send();
});

app.listen('3000', () => {
  console.log('Listening on Port 3000');
});

module.exports = app;
