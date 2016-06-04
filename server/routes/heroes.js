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

router.get('/', function (req, res) {
  Hero.find({}, function (err, heroes) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(heroes);
  });
});

router.delete('/:id', function (req, res) {
  Hero.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(204);
  });
});

module.exports = router;
