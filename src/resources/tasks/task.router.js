const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/:boardId/tasks').get(async (req, res) => {
  const tasks = await tasksService.getAll(req.params.boardId);
  res.json(tasks);
});

router.route('/:boardId/tasks/:id').get(async (req, res) => {
  try {
    const task = await tasksService.getTask(req.params.boardId, req.params.id);
    res.json(Task.toResponse(task));
  } catch (err) {
    console.log(err);
    res.status(404);
    res.end('Task not found');
  }
});

router.route('/:boardId/tasks').post(async (req, res) => {
  try {
    const newTask = await tasksService.createTask(
      new Task(req.body),
      req.params.boardId
    );
    res.json(Task.toResponse(newTask));
  } catch (err) {
    console.log(err);
    res.status(400);
    res.end('Bad request');
  }
});

router.route('/:boardId/tasks/:id').put(async (req, res) => {
  try {
    const updatedTask = await tasksService.updateTask(
      req.params.boardId,
      req.params.id,
      req.body
    );
    res.json(Task.toResponse(updatedTask));
  } catch (err) {
    console.log(err);
    res.status(400);
    res.end('Bad request');
  }
});

router.route('/:boardId/tasks/:id').delete(async (req, res) => {
  try {
    await tasksService.deleteTask(req.params.boardId, req.params.id);
    res.json();
    res.status(204);
  } catch (err) {
    console.log(err);
    res.status(404);
    res.end('Task not found');
  }
});

module.exports = router;
