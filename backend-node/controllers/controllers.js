const express = require("express");
const {
  emailIsValid,
  encryptPassword,
  generateToken,
  comparePassword,
} = require("../utils");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs").promises;

const registerUser = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please fill in all details" });
    }

    if (!emailIsValid(email)) {
      return res
        .status(400)
        .json({ message: "Please provide a valid email address" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password length must be at least 6 characters" });
    }

    const UsersJson = await fs.readFile("Users.json", "utf8");
    const Users = JSON.parse(UsersJson);

    if (Users[email]) {
      return res
        .status(400)
        .json({ message: "User already exists. Try another email address" });
    }

    password = await encryptPassword(password);
    const id = uuidv4();

    const newUser = {
      id,
      email,
      password,
    };

    Users[email] = newUser;

    await fs.writeFile("Users.json", JSON.stringify(Users));

    const token = await generateToken(newUser.id);

    return res
      .status(201)
      .json({ message: "Sign up successful", data: { newUser, token } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong. Please try again" });
  }
};

const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please fill in all details" });
    }

    if (!emailIsValid(email)) {
      return res
        .status(400)
        .json({ message: "Please provide a valid email address" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password length must be at least 6 characters" });
    }

    const UsersJson = await fs.readFile("Users.json", "utf8");
    const Users = JSON.parse(UsersJson);

    const user = Users[email];

    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid email/password combination" });
    }

    const passwordCorrect = await comparePassword(password, user.password);

    if (!passwordCorrect) {
      return res
        .status(400)
        .json({ message: "Invalid email/password combination" });
    }

    const token = await generateToken(user.id);

    return res
      .status(200)
      .json({ message: "Log in successful", data: { user, token } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong. Please try again" });
  }
};

module.exports = { registerUser, loginUser };
