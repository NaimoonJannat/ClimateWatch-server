const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema(


  {
      
    photo: String,
    heading: String,
    description: String,
    additionalImages: [String],
    fundCollected: Number,
    neededFund: Number,
    projectBrief: [String],
    goalAndPlan: String,
    briefDescriptions: [String],

  },
  { timestamps: true }
);

const Projects = mongoose.model("projects", projectsSchema);

module.exports = Projects;
