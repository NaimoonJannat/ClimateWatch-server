const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
name: String,
age: String,

}, { timestamps: true })

const Volunteers = mongoose.model('volunteers', volunteerSchema);

module.exports = Volunteers