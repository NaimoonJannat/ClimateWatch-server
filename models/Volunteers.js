const mongoose = require("mongoose");

const volunteersSchema = new mongoose.Schema(
  {
    name: String,
    profession: String,
    email: String,
    date_of_brith: String,
    phone: String,
    website: String,
    social_profile: {
      facebook: String,
      linkedIn: String,
      twitter: String,
      instagram: String,
    },
    bio: String,
    skills: [
      {
        name: String,
        percentage: String,
      },
    ],
    qualification: [
      {
        name: String,
        percentage: Number,
      },
    ],
    resume_link: String,
    photo_url: String,
  },
  { timestamps: true }
);

const Volunteers = mongoose.model("volunteers", volunteersSchema);

module.exports = Volunteers;
