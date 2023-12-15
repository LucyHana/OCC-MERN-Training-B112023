const user = require("../models/users_model");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let addUser = async (req, res) => {
  //grabbing the email and password value from the user input
  const { email, password } = req.body;

  try {
    //check for existing user
    const existingUser = await user.findOne({ email: email });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Username already taken", email: existingUser });
    }

    //encrypt password
    const hashed_password = await bcrypt.hash(password, 10);
    await user.create({ email, password: hashed_password });
    res.status(200).json({ message: "Account successfully added!" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    //email validation
    const existing_user = await user.findOne({ email: email });

    if (!existing_user) {
      // If no user is found, return an error response
      return res.status(400).json({ error: "User does not exist" });
    }

    //password validation

    const does_password_match = await bcrypt.compare(
      password,
      existing_user.password
    );

    if (!does_password_match) {
      return res.status(400).json({ error: "Incorrect password" });
    }
    //generating json web token
    const token = jwt.sign({ userId: existing_user._id }, "SECRET", {
      expiresIn: "1h",
    });
    res.status(200).json({ message: "Login successful!", token });
  } catch (error) {
    res.status(400).json({ error: "Internal Server Error" });
  }
};

module.exports = { addUser, userLogin };
