// const express = require("express");
const { createStudentUser } = require("/services/student");
const { signUp, signIn } = require("/controller/user");
// const app = express();

const studentRoutes = (app) => {
  app.post("/sign_up", signUp, async (req, res) => {
    try {
      let { email, password } = req.body;
      console.log(
        "createStudentUser({email, password}",
        createStudentUser({ email, password })
      );
      let students = new students({
        email,
        password: createStudentUser(password),
      });
    } catch (error) {
      console.log(error);
    }
  });
  app.post("/signIn", signIn);
};

module.exports = { studentRoutes };
