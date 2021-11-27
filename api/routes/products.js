const express = require('express');
const Product = require('../model/productModel');

const productRoute = express.Router();



productRoute.route('/')
    .get((req, res, next) => {
        Product.find(req.query)
            .then((data) => {
                res.statusCode = 200;
                res.json(data);
            })
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Product.create(req.body)
            .then((data) => {
                res.statusCode = 200;
                res.json(data)
            })
            .catch((err) => next(err));
    });


productRoute.route('/:productId')
    .get((req, res, next) => {
        Product.findById(req.params.productId)
            .then((data) => {
                res.statusCode = 200;
                res.setHeader('content-Type', 'application/json');
                res.json(data);
            })
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        Product.findByIdAndUpdate(req.params.productId, {
            $set: req.body
        }, { new: true })
            .then((data) => {
                res.statusCode = 200;
                res.json(data);
            })
            .catch((err) => next(err));
    });


module.exports = productRoute;