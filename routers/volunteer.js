const express = require('express');
const { getAllVolunteers } = require('../controllers/volunteer');

const volunteerRouter = express.Router()

volunteerRouter.get('/' , getAllVolunteers)

module.exports = volunteerRouter