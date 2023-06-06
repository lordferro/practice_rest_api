const express = require("express");
const router = express.Router();

const contacts = [
  { id: "1", username: "Felix", surname: "Brown", email: "felix@test.com" },
  { id: "2", username: "Sonya", surname: "Redhead", email: "sonya@test.com" },
  { id: "3", username: "Conan", surname: "Barbarian", email: "conan@test.com" },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(contacts);
});

/*Get user by id */
router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  const contact = contacts.find((item) => item.id === id);
  if (!contact) {
    return next();
  }
  res.json(contact);
});

module.exports = router;
