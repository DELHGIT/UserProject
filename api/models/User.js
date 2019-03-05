// Users.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let User = new Schema({
    id: { type: Number },
    firstName: { type: String },
    lastName: { type: String },
    gender: { type: String },
    email: { type: String },
    annualSalary: { type: Number },
    dataOfBirth: { type: String },
    isActive: { type: Boolean }

}, {
    collection: 'User'
});

module.exports = mongoose.model('User', User);