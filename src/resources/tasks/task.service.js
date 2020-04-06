const tasksRepo = require('./task.memory.repository');

const getAll = boardId => tasksRepo.getAll(boardId);
const getTask = (boardId, id) => tasksRepo.getTask(boardId, id);
const createTask = (task, boardId) => tasksRepo.createTask(task, boardId);
const updateTask = (boardId, id, data) =>
  tasksRepo.updateTask(boardId, id, data);
const deleteTask = (boardId, id) => tasksRepo.deleteTask(boardId, id);
const deleteTasksOnBoard = boardId => tasksRepo.deleteTasksOnBoard(boardId);
const setTaskUserIdToNull = userId => tasksRepo.setTaskUserIdToNull(userId);

module.exports = {
  getAll,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  deleteTasksOnBoard,
  setTaskUserIdToNull
};
