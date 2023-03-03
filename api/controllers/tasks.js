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
} // criar tarefa

export function getTasks(req, res) {
  Task.findAll()
    .then((result) => {
      res.status(200).json({
        tasks: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
} // buscar tarefa

export function getTaskById(req, res) {
  const { taskId } = req.params;

  Task.findByPk(taskId)
    .then((task) => {
      if (!task) {
        return res.status(404).json({ message: "Tarefa não localizada" });
      }
      res.status(200).json({ task });
    })
    .catch((err) => console.log(err));
} // buscar tarefa por id

export function updateTaskById(req, res) {
  const { taskId } = req.params;
  const { title, description, status, term } = req.body;

  Task.findByPk(taskId)
    .then((task) => {
      if (!task) {
        return res.status(404).json({ message: "Tarefa não localizada" });
      }
      task.title = title;
      task.description = description;
      task.status = status;
      task.term = term;

      return task.save();
    })
    .then((result) => {
      res
        .status(200)
        .json({ message: "Tarefa atualizada com sucesso.", task: result });
    });
} // atualizar tarefa por id

export function deleteTaskById(req, res) {
  const { taskId } = req.params;

  Task.findByPk(taskId)
    .then((task) => {
      if (!task) {
        return res.status(404).json({ message: "Tarefa não localizada" });
      }
      return task.destroy();
    })
    .then(() => {
      res.status(200).json({ message: "Tarefa deletada com sucesso." });
    });
} // deletar tarefa por id
