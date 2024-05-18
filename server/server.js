const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");

const app = express();
app.use(express.json());

const _dbURI =
  "mongodb+srv://johnrico:john2004@projectsystems.cg2cala.mongodb.net/car_rental?retryWrites=true&w=majority&appName=ProjectSystems";

mongoose.connect(_dbURI).then(() => {
  console.log("Connected");
});
app.listen(3001, () => console.log("Listening to port 3001"));

app.use("/api/users", userRoutes);
