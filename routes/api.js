const express = require("express");
const { nanoid } = require("nanoid");

const router = express.Router();

const tasks = [];

router.get("/tasks", (req, res, next) => {
  res.json({ status: "success", code: 200, data: { tasks } });
});

router.get("/tasks/:id", (req, res, next) => {
  const { id } = req.params;
  const task = tasks.filter((el) => el.id === id);
  res.json({
    status: "success",
    code: 200,
    data: { task },
  });
});

router.post("/tasks", (req, res, next) => {
  const { title, text } = req.body;
  const task = {
    id: nanoid(),
    title,
    text,
    done: false,
  };
  tasks.push(task);
  res.status(201).json({ status: "success", code: 201, data: { task } });
});

router.put("/tasks/:id", (req, res, next) => {
  const { id } = req.params;
  const index = tasks.findIndex((el) => el.id === id);
  tasks[index] = { ...tasks[index], ...req.body };
  res.json({ status: "success", code: 200, data: tasks[index] });
});

router.patch("/tasks/:id/status", (req, res, next) => {
  const { id } = req.params;
  const { done } = req.body;
  const [task] = tasks.filter((el) => el.id === id);
  console.log(task);
  task.done = done;
  res.status(200).json({
    status: "success",
    code: 200,
    data: { task },
  });
});

router.delete("/tasks/:id", (req, res, next) => {
  const { id } = req.params;
  const index = tasks.findIndex((el) => el.id === id);
tasks.splice(index, 1);

    res.status(204).json()
});

module.exports = router;
