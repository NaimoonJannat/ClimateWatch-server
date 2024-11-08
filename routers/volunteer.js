const express = require('express');
const { getAllVolunteers, getSingleVolunteer, addVolunteer, updateVolunteer, deleteVoulunteers } = require('../controllers/volunteer');

const volunteerRouter = express.Router()

volunteerRouter.get('/' , getAllVolunteers)

volunteerRouter.get('/:id', getSingleVolunteer)

volunteerRouter.post('/', addVolunteer)

volunteerRouter.patch('/:id', updateVolunteer)

volunteerRouter.delete('/:id', deleteVoulunteers)


module.exports = volunteerRouter