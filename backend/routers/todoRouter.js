const todoModel = require("../schema/todoSchema");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const todoData = await todoModel.find();
    res.status(200).json(todoData);
  } catch (error) {
    res.status(400).json(error?.message);
  }
});

router.post("/create", async (req, res) => {
  console.log("---- todo created -----");
  try {
    const { title, completed } = req.body;
    const newTodo = new todoModel({ title, completed });
    const data = await newTodo.save();
    console.log("Data", data);
    res.status(200).json(data);
  } catch (error) {
    console.log("error", error);
    res.status(400).json(error?.message);
  }
});

router.delete("/:todoId", async (req, res) => {
  try {
    const { todoId } = req.params;
    const removedTodo = await todoModel.findByIdAndDelete(todoId);
    const todoData = await todoModel.find();
    res.status(200).json(todoData);
  } catch (error) {
    res.status(400).json(error?.message);
  }
});

router.put("/:todoId", async (req, res) => {
  try {
    const { todoId } = req.params;
    const { completed } = req.body;
    console.log("completed", completed, "todId", todoId);
    const updatedTodo = await todoModel.findByIdAndUpdate(todoId, {
      completed,
    });
    const todoData = await todoModel.find();
    res.status(200).json(todoData);
    // const removedTodo = await todoModel.findByIdAndDelete(todoId);
    // const todoData = await todoModel.find();
  } catch (error) {
    res.status(400).json(error?.message);
  }
});

module.exports = router;
