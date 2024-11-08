const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema(


  {
    imgUrl: String,
    email: String,
    description: String,
    title: String,
    // health_issues_arise: String,
    blogger_photo: String,
    // additional_photos: [String],
    blogger_name: String,
    category: [String],
    // blogger_description: String,
    

  },
  { timestamps: true }
);

const Blogs = mongoose.model("blogs", blogsSchema);

module.exports = Blogs;
