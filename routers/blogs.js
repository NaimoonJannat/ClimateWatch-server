const express = require('express');
const { getAllVolunteers, getSingleVolunteer, addVolunteer, updateVolunteer, deleteVoulunteers } = require('../controllers/volunteer');
const { getAllBlogs, getSingleBlog, addBlog, updateBlog } = require('../controllers/blogs');

const blogsRouter = express.Router()

blogsRouter.get('/' , getAllBlogs)

blogsRouter.get('/:id', getSingleBlog)

blogsRouter.post('/', addBlog)

blogsRouter.patch('/:id', updateBlog)

blogsRouter.delete('/:id', deleteVoulunteers)


module.exports = blogsRouter