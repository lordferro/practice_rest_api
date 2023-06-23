const express = require("express");

const mongoose = require("mongoose");
const DB_HOST =
  "mongodb+srv://lordferro:21011987@fedor.omz8mer.mongodb.net/booksReader?retryWrites=true&w=majority";

// mongoose.set('strictQuery',true)

mongoose
  .connect(DB_HOST)
  .then(() => console.log("DB connected"))
  .catch((error) => console.log(error.message));

const app = express();

module.exports = app;
