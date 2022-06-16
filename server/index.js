const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5050;

app.use(express.json());

const url = "mongodb://localhost/Amazon-Clone";
mongoose.connect(url);
const con = mongoose.connection;
con.on("open", () => console.log("connected"));

const authRouter = require("./routes/auth");
app.use("/user", authRouter);

app.listen(PORT, () => `listening to: localhost:${PORT}`);
