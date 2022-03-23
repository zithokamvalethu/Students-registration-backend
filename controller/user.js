const studentService = require("../services/student.js");

const signUp = async (req, res, next) => {
  try {
    const newStudent = req.body;
    const savedStudent = await studentService.createStudentUser(newStudent);
    res.status(200).json({
      success: true,
      data: savedStudent,
    });
  } catch (error) {
    console.log(error);
  }
};

const signIn = async (req, res, next) => {
  try {
    const payload = req.body;
    const token = await studentService.signedInStudent(payload);
    res.status(200).json({
      success: true,
      token: token,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { signIn, signUp };
