const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});
export default mongoose.model("studentSchema", studentSchema);
