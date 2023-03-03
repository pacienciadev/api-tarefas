import express from "express";

import {
  createTask,
  deleteTaskById,
  getTaskById,
  getTasks,
  updateTaskById,
} from "../controllers/tasks.js";

const router = express.Router();

router.get("/", (_, res) => {
  res.send(
    "<div><h1>Tarefas api - Paciencia dev</h1><h2>Crie, edite, busque e apague.</h2></div>"
  );
});

router.get("/tasks", getTasks);
router.get("/task/:taskId", getTaskById);

router.post("/task", createTask);

router.put("/task/:taskId", updateTaskById);

router.delete("/task/:taskId", deleteTaskById);

export default router;
