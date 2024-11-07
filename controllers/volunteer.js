const Volunteers = require("../models/Volunteers")

exports.getAllVolunteers = async (req, res) => {
try {
    const volunteers = await Volunteers.find()
    res.send(volunteers)
    
} catch (error) {
    console.error('error has detected', error);
    res.status(500).json({error: 'an error occurred in fetching volunteers'})
}
}