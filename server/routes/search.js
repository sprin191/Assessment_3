var express = require('express');
var router = express.Router();
var SuperPower = require('../models/superpower');

router.get('/', function (req, res) {
    SuperPower.find({}, function (err, powers) {
      if (err) {
        res.sendStatus(500);
        console.log(err);
        return;
      }
      console.log(powers);
      res.send(powers);
    });
});


module.exports = router;
