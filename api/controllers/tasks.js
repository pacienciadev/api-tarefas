import Task from "../models/task.js";

export function createTask(req, res) {
  const { title, description, status, term } = req.body;

  Task.create({
    title,
    description,
    status,
    term,
  })
    .then((result) => {
      res.status(201).json({
        message: "Task created successfully!",
        task: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
