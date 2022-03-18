const bcrypt = require("bcrypt");
const studentSchema = require("../model/studentSchema.js");
const signedToken = require("../jsonWebtoken/signedToken");

async function createStudentUser(payload) {
  return studentSchema.find({ email: payload.email })((student) => {
    if (student.length > 0) {
      throw new Error("User already exist");
    }
    return bcrypt
      .hash(payload.password, 10)
      .then((hashed) => {
        const newStudent = new student({
          email: payload.email,
          password: hashed,
        });
        return newStudent.save();
      })
      .catch((Error) => {
        throw new Error("All fields are required");
      });
  });
}

function signedInStudent(payload) {
  return studentSchema
    .findOne({ email: payload.email })
    .exec()
    .then((student) => {
      if (!student) {
        throw new Error("enter email or password correctly");
      } else {
        return bcrypt
          .compare(payload.password, student.password)
          .then((res) => {
            if (res) {
              const token = signedToken(user_id);
              return token;
            } else {
              throw new Error("Incorrect password or email. try again");
            }
          })
          .catch((err) => {
            throw new Error("ALl fields are required");
          });
      }
    });
}
module.exports = { createStudentUser, signedInStudent };
