const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5050;
const dbURL =
  "mongodb+srv://edr3x:ZwxD6JTWBLGSWn4X@cluster0.mdxtg.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());

const authRouter = require("./routes/router.auth");
app.use("/user", authRouter);

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("connected to Database");
    app.listen(PORT, "0.0.0.0", () =>
      console.log(`listening to: localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.log(err);
  });
