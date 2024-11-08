const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { getAllVolunteers } = require("./controllers/volunteer");
const blogsRouter = require("./routers/blogs");
const projectsRouter = require("./routers/projects");

const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000; //it will be available at http://localhost:3000

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.use('/volunteers', getAllVolunteers)

app.use('/blogs', blogsRouter)

app.use('/projects', projectsRouter)





// Mongoose connection

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("CONNECTED TO MONGODB ATLAS!!!!!");
  } catch (error) {
    console.error("error connceting to mongodb atlas", error);
    process.exit(1);
  }
};

app.get("/", (req, res) => {
  res.send("this web is successfully running");
});

app.listen(port, () => {
  connectDB();
  console.log(`App is running on ${port}`);
});
