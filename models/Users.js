const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(


  {
      
    name: String,
    photo: String,
    email: String,
    role: String,


  },
  { timestamps: true }
);

const Users = mongoose.model("users", usersSchema);

module.exports = Users;
