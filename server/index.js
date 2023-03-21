const express = require("express");
const authRouter = require("./authRouter");
const cors = require("cors");
const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);

const start = () => {
  try {
    app.listen(PORT, () => console.log("server started"));
  } catch (e) {
    console.log(e);
  }
};

start();
