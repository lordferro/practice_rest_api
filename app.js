const express = require("express");
const cors = require("cors");
const path = require("path");
const contactsRouter = require("./routes/api/contacts");
const htmlRouter = require("./routes/html");

const app = express();

const createPath = (page) =>
  path.resolve(__dirname, "ejs-views", `${page}.ejs`);

app.set("view engine", "ejs");
app.use(cors());
// check content-type of body request, if application/json and make object from string
app.use(express.json());

app.use("/api/contacts", contactsRouter);
app.use("/", htmlRouter);

app.use((req, res) => {
  const title = "Error page";
  res.status(404).render(createPath("error"), { title });
});

app.use((err, req, res, next) => {
  let { status = 500, message = "Server error" } = err;
  if (status === 500) {
    message = "Server error";
  }
  res.status(status).json({ message });
});

module.exports = app;
