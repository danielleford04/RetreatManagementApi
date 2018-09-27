var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Task = require('../models/Task.js');

/* GET ALL TASKS */
router.get('/', function(req, res, next) {
  Task.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE TASK BY ID */
router.get('/:id', function(req, res, next) {
  Task.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE TASK */
router.post('/', function(req, res, next) {
  console.log(req);
  Task.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE TASK */
router.put('/:id', function(req, res, next) {
  Task.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE TASK */
router.delete('/:id', function(req, res, next) {
  Task.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
