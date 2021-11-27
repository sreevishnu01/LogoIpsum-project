const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        maxlength: 8
    },
    rating: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        required: true
    },
    img: {
        type: String
    },
    category: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Product', Product);