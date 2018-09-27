var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var StoredForm = require('../models/StoredForm.js');

/* GET ALL STORED FORMSS */
router.get('/', function(req, res, next) {
  StoredForm.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE STORED FORMS BY ID */
router.get('/:id', function(req, res, next) {
  StoredForm.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE STORED FORMS */
router.post('/', function(req, res, next) {
  console.log(req.body)
  StoredForm.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE STORED FORMS */
router.put('/:id', function(req, res, next) {
  StoredForm.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE STORED FORMS */
router.delete('/:id', function(req, res, next) {
  StoredForm.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
