const express = require('express');
const { getAllProjects, getSingleProject, addProject, updateProject, deleteProjects } = require('../controllers/projects');

const projectsRouter = express.Router()

projectsRouter.get('/' , getAllProjects)

projectsRouter.post('/', addProject)

projectsRouter.delete('/:id', deleteProjects)

module.exports = projectsRouter