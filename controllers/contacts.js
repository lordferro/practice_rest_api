
const contacts = require("../models/contacts");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const result = await contacts.listContacts();
  res.json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.getContactById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const add = async (req, res) => {
   const result = await contacts.addContact(req.body);
  res.status(201).json(result);
};

const editById = async (req, res) => {

  const { id } = req.params;
  const data = req.body;
  const result = await contacts.editContactById(id, data);
  if (!result) {
    throw HttpError(404, "not found");
  }
  res.json(result);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.removeContact(id);
  if (!result) {
    throw HttpError(404, "not found");
  }
  res.json({ message: "delete success" });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  editById: ctrlWrapper(editById),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  deleteById: ctrlWrapper(deleteById),
};
