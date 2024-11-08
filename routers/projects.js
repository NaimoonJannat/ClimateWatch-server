const express = require('express');
const { getAllProjects, getSingleProject, addProject, updateProject, deleteProjects } = require('../controllers/projects');

const projectsRouter = express.Router()

projectsRouter.get('/' , getAllProjects)

projectsRouter.get('/:id', getSingleProject)

projectsRouter.post('/', addProject)

projectsRouter.patch('/:id', updateProject)

projectsRouter.delete('/:id', deleteProjects)

module.exports = projectsRouter