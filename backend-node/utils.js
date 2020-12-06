const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  emailIsValid: function (email) {
    return /\S+@\S+\.\S+/.test(email);
  },

  encryptPassword: async function (password) {
    try {
      const salt = await bcrypt.genSalt(10);
      const encryptedPassword = await bcrypt.hash(password, salt);
      return encryptedPassword;
    } catch (error) {
      console.error(error);
    }
  },

  generateToken: async function (id) {
    try {
      const token = await jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "365d",
      });
      return token;
    } catch (error) {
      console.error(error);
    }
  },

  comparePassword: async function (password, userPassword) {
    try {
      const passwordCorrect = await bcrypt.compare(password, userPassword);
      return passwordCorrect;
    } catch (error) {
      console.error(error);
    }
  },
};
