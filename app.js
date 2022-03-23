const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { books } = require("./routes/books");
const { student } = require("./routes/auth");
app.use(cors());
mongoose
  .connect(process.env.DATABASE_SERVER)
  .then((res) => console.log("I am connected to MongoDB"));

student(app);
books(app);
app.listen(process.env.PORT, () => {
  console.log("Server started on port" + process.env.PORT);
});
