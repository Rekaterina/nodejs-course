const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/:boardId/tasks').get(async (req, res, next) => {
  try {
    const tasks = await tasksService.getAll(req.params.boardId);
    res.json(tasks);
  } catch (err) {
    return next(err);
  }
});

router.route('/:boardId/tasks/:id').get(async (req, res, next) => {
  try {
    const task = await tasksService.getTask(req.params.boardId, req.params.id);
    res.json(Task.toResponse(task));
  } catch (err) {
    return next(err);
  }
});

router.route('/:boardId/tasks').post(async (req, res, next) => {
  try {
    const newTask = await tasksService.createTask(
      req.body,
      req.params.boardId
    );
    res.json(Task.toResponse(newTask));
  } catch (err) {
    return next(err);
  }
});

router.route('/:boardId/tasks/:id').put(async (req, res, next) => {
  try {
    const updatedTask = await tasksService.updateTask(
      req.params.boardId,
      req.params.id,
      req.body
    );
    res.json(Task.toResponse(updatedTask));
  } catch (err) {
    return next(err);
  }
});

router.route('/:boardId/tasks/:id').delete(async (req, res, next) => {
  try {
    await tasksService.deleteTask(req.params.boardId, req.params.id);
    res.json();
    res.status(204);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
