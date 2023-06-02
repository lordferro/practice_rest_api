const express = require("express");
const cors = require("cors");
const contactsRouter = require("./routes/api/contacts");

const app = express();
app.use(cors());
// check content-type of body request, if application/json and make object from string  
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ messge: "not found" });
});

app.use((err, req, res, next) => {
  let { status = 500, message = "Server error" } = err;
  if (status === 500) {
    message = "Server error";
  }
  res.status(status).json({ message });
});

module.exports = app;
