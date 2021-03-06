var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Instruction = require('../models/Instruction.js');

/* GET ALL INSTRUCTIONS */
router.get('/', function(req, res, next) {
  Instruction.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE INSTRUCTION BY ID */
router.get('/:id', function(req, res, next) {
  Instruction.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE INSTRUCTION */
router.post('/', function(req, res, next) {
  console.log(req);
  Instruction.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE INSTRUCTION */
router.put('/:id', function(req, res, next) {
  Instruction.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE INSTRUCTION */
router.delete('/:id', function(req, res, next) {
  Instruction.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
