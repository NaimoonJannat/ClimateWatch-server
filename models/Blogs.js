const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema(


  {
    photo_url: String,
    post_date: String,
    description: String,
    effect_on_title: String,
    health_issues_arise: String,
    blogger_photo: String,
    additional_photos: [String],
    blogger_name: String,
    tags: [String],
    blogger_description: String,
    

  },
  { timestamps: true }
);

const Blogs = mongoose.model("blogs", blogsSchema);

module.exports = Blogs;
