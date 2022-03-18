const jwt = require("jsonwebtoken");

const keys = require("../keys.js");

const signedToken = function (id) {
  return jwt.sign({ _id: id }, keys.JWT_SECRET, { expiresIn: "1hr" });
};
module.exports = signedToken;
