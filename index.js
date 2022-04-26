const express = require("express");
const { default: mongoose } = require("mongoose");
const {
  MONGO_IP,
  MONGO_PORT,
  MONGO_USER,
  MONGO_PASSWORD,
} = require("./config/config");

const app = express();
const PORT = process.env.PORT || 3000;

mongoose
  .connect(
    `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
  )
  .then(() => {
    console.log(`succesfully connected to db`);
  })
  .catch((e) => {
    console.log(`we have an error: ${e}`);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
