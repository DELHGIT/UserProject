// Users.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Users = new Schema({
    id: { type: Number },
    firstName: { type: String },
    lastName: { type: String },
    gender: { type: String },
    email: { type: String }

}, {
    collection: 'users'
});

module.exports = mongoose.model('Users', Users);