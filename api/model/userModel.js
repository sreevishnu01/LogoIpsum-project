const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({

    firstname: {
        type: String,
        maxlength: 30
    },
    lastname: {
        type: String,
        maxlength: 30

    },
    email: {
        type: String,
        unique: true
    }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);