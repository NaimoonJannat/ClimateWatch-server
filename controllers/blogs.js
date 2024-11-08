const Blogs = require("../models/Blogs")

exports.getAllBlogs = async (req, res) => {
try {
    const blogs = await Blogs.find()
    res.send(blogs)
    
} catch (error) {
    console.error('error has detected', error);
    res.status(500).json({error: 'an error occurred in fetching Blogs'})
}
}

exports.getSingleBlog = async ( req,res) =>{
try {
const {id} = req.params
    const blogs = await Blogs.findById(id)
    res.send(blogs)
} catch (error) {
console.error(error);

    
}}


exports.addBlog = async(req,res) =>{

    const blogs = req.body 
    const result = await Blogs.insertMany(blogs)
    res.send(result)
}

exports.updateBlog = async(req, res) =>{

    
    try {
        const id = req.params.id 
        const blogs = req.body 
        const result  = await Blogs.findByIdAndUpdate(id, blogs , {
        new: true
        })
        res.send(result)
    } catch (error) {
        console.error(error);
        
    }
}

exports.deleteVoulunteers = async( req, res) =>{
    const {id} = req.params 
    const blogs = await Blogs.findByIdAndDelete({_id: id})
    res.send(blogs)
}

