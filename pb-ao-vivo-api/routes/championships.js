var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Championship = require('../models/Championship.js');

/* GET championships listing. */
router.get('/', function(req, res, next) {
    Championship.find(function (err, todos) {
        if (err) return next(err);
        res.json(todos);
    });
});

/* GET championships by id */
router.get('/:id', function(req, res, next) {
    Championship.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* POST championship */
router.post('/', function(req, res, next) {
    Championship.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT update championship */
router.put('/:id', function(req, res, next) {
    Championship.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE championship */
router.delete('/:id', function(req, res, next) {
    Championship.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
