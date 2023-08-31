const express = require("express");
const path = require("path");

const router = express.Router();

const createPath = (page) =>
  path.resolve(__dirname, "../", "ejs-views", `${page}.ejs`);

router.get("/", (req, res) => {
  const title = 'Home'
  res.render(createPath("index"),{title});
});

router.get("/contacts", (req, res) => {
  const title = "Contacts";
  const contacts = [
    { name: "GitHub", link: "http://github.com/lordferro" },
    { name: "LinkedIn", link: "http://linkedin.com/in/fedor-romanovschi" },
  ];
  res.render(createPath("contacts"), { contacts, title });
});

router.get("/posts/:id", (req, res) => {
  const title = "Post";
    res.render(createPath("post"), { title });
});

router.get("/posts", (req, res) => {
  const title = "Posts";
  res.render(createPath("posts"), { title });
});

router.get("/add-post", (req, res) => {
  const title = "Add post";
  res.render(createPath("add-post"), { title });
});

module.exports = router;
