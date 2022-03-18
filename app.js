const express = require("express");
const app = express();
const mongoose = require("mongoose");

const port = 3000 | process.env;

app.use(express.json());
app.use("/", authRouter);
mongoose.connect({});
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
