const user = require("../models/users_model");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let addUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await user.findOne({ email: email });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Username already taken", email: existingUser });
    }

    const hashed_password = await bcrypt.hash(password, 10);
    await user.create({ email, password: hashed_password });
    res.status(200).json({ message: "Account successfully added!" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: error.message });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existing_user = await user.findOne({ email: email });

    if (!existing_user) {
      return res.status(400).json({ error: "User does not exist" });
    }

    const does_password_match = await bcrypt.compare(
      password,
      existing_user.password
    );

    if (!does_password_match) {
      return res.status(400).json({ error: "Incorrect password" });
    }

    const token = jwt.sign({ userId: existing_user.id }, "SECRET", {
      expiresIn: "3h",
    });
    res.status(200).json({ message: "Login successful!", token });
  } catch (err) {
    res.status(400).json({ error: "Internal Server Error" });
  }
};

module.exports = { addUser, userLogin };
