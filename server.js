'use strict'
var dotenv = require('dotenv');
dotenv.config();
var express = require("express"),
  app = express(),
  router = require("./routes"),
  path = require('path'),
  port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// serve static content
app.use(express.static(path.join(__dirname, 'public')))

app.use("/", router)
app.use('*', function (req, res) {
  res.render('pages/404', {route: 'error'});
})

app.listen(port, function () {
  console.log('Server is running at ' + ':' + port)
})