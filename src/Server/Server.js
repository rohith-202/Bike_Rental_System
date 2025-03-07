const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./Schema/User.js");

const app = express();
app.use(express.json());
app.use(cors());

const port = 3001;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

mongoose
  .connect("mongodb://127.0.0.1:27017/Users")
  .then(() => {
    console.log("mongo db connceted");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.post("/RegisterDetails", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await userModel.findOne({
      $or: [{ email }, { name }],
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email or name already exists!" });
    }
    const newUser = await userModel.create({ name, email, password });
    res
      .status(201)
      .json({ message: "User registered successfully!", user: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid password" });
    }
    res.json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});
