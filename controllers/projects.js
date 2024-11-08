const Projects = require("../models/Projects")

exports.getAllProjects = async (req, res) => {
try {
    const project = await Projects.find()
    res.send(project)
    
} catch (error) {
    console.error('error has detected', error);
    res.status(500).json({error: 'an error occurred in fetching Projects'})
}
}

exports.getSingleProject = async ( req,res) =>{
try {
const {id} = req.params
    const project = await Projects.findById(id)
    res.send(project)
} catch (error) {
console.error(error);

    
}}


exports.addProject = async(req,res) =>{

    const project = req.body 
    const result = await Projects.insertMany(project)
    res.send(result)
}

exports.updateProject = async(req, res) =>{

    
    try {
        const id = req.params.id 
        const project = req.body 
        const result  = await Projects.findByIdAndUpdate(project, id , {
        new: true
        })
        res.send(result)
    } catch (error) {
        console.error(error);
        
    }
}

exports.deleteProjects = async( req, res) =>{
    const {id} = req.params 
    const project = await Projects.findByIdAndDelete({_id: id})
    
    res.send(project)
}

