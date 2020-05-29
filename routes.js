var express = require('express'),
  router = express.Router(),
  API = require('./src/controller')

router.use(function (req, res, next) {
  console.log(req.method + ' ' + req.path)
  next()
})

router.get('/', function (req, res) {
  res.render('pages/index', {route: req.path})
})

router.get('/design', function (req, res) { //MSR Design
  res.render('pages/design', {route: req.path})
})

router.get('/dashboards', function (req, res) { //References
  res.render('pages/dashboards', {route: req.path})
})

router.get('/about', function (req, res) {
  res.render('pages/about', {route: req.path})
})

router.get('/contact', function (req, res) {
  res.render('pages/contact', {route: req.path})
})


//API TEST
router.get('/api/size', function (req, res) { //todo head <> backend
  API.getSize(req.query.lat, req.query.lon, req.query.precision, req.query.lastTimestamp, (e) => {
    res.send(e)
  })
})

router.get('/api/list', function (req, res) {
  API.getList(req.query.lat, req.query.lon, req.query.precision, req.query.lastTimestamp, (e) => {
    res.send(e)
  })
})

router.get('/api/message', function (req, res) { //todo post <> backend
  API.postMessage('', (e) => {
    res.send(e)
  })
})

router.get('/api/report', function (req, res) { //todo put <> backend
  API.putAreaReport('', (e) => {
    res.send(e)
  })
})


module.exports = router