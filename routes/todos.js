const express = require("express");
const router = express.Router();

const TodoControllers = require("../controllers/TodoControllers");

router.get("/getTodos/:bucketName", TodoControllers.getBucketTodos);
router.post("/createTodo", TodoControllers.createTodo);
router.post("/editTodo", TodoControllers.editTodo);
router.delete("/deleteTodo/:id", TodoControllers.deleteTodo);
router.put("/changeStatus", TodoControllers.changeStatus);

router.post("/createBucket", TodoControllers.createTodoTable);
router.get("/bucketsList/:category", TodoControllers.getBucketsList);

module.exports = router;
