const Volunteers = require("../models/Volunteers");

exports.getAllVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteers.find();
    res.send(volunteers);
  } catch (error) {
    console.error("error has detected", error);
    res.status(500).json({ error: "an error occurred in fetching volunteers" });
  }
};

exports.getSingleVolunteer = async (req, res) => {
  try {
    const { id } = req.params;
    const volunteer = await Volunteers.findById(id);
    res.send(volunteer);
  } catch (error) {
    console.error(error);
  }
};

exports.addVolunteer = async (req, res) => {
  const volunteer = req.body;
  const result = await Volunteers.insertMany(volunteer);
  res.send(result);
};

exports.updateVolunteer = async (req, res) => {
  try {
    const id = req.params.id;
    const volunteer = req.body;
    const result = await Volunteers.findByIdAndUpdate(volunteer, id, {
      new: true,
    });
    res.send(result);
  } catch (error) {
    console.error(error);
  }
};

exports.deleteVoulunteers = async (req, res) => {
  const { id } = req.params;
  const voulnteer = await Volunteers.findOneAndDelete({ _id: id });
};
