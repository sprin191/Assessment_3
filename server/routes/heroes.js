var express = require('express');
var router = express.Router();
var Hero = require('../models/hero');


router.post('/', function (req, res) {
  console.log(req.body);
  var hero = new Hero(req.body);
  hero.save(function (err) {
    if (err) {
      console.log('whoops');
      res.sendStatus(500);
      return;
    }
    console.log('post worked');
    res.sendStatus(201);
  });
});

module.exports = router;
