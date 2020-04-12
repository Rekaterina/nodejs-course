const { ValidationError } = require('../../middleware/errorHandler');

let tasks = [];

const getAll = async () => {
  return tasks;
};

const createTask = async (task, boardId) => {
  const newTask = { ...task, boardId };
  tasks.push(newTask);
  return newTask;
};

const getTask = async (boardId, id) => {
  const findTask = tasks.find(task => task.boardId === boardId && task.id === id);
  if (!findTask) {
    throw new ValidationError();
  } else {
    return findTask;
  }
};

const updateTask = async (boardId, id, data) => {
  const updatedIndex = tasks.findIndex(
    task => task.boardId === boardId && task.id === id
  );
  if (!updatedIndex) {
    throw new ValidationError();
  } else {
    return (tasks[updatedIndex] = { ...tasks[updatedIndex], ...data });
  }
};

const deleteTask = async (boardId, id) => {
  const deletedIndex = tasks.findIndex(
    task => task.boardId === boardId && task.id === id
  );
  if (!deletedIndex) {
    throw new ValidationError();
  } else {
    return tasks.splice(deletedIndex, 1);
  }
};

const deleteTasksOnBoard = async boardId => {
  tasks = tasks.filter(task => task.boardId !== boardId);
};

const setTaskUserIdToNull = async userId => {
  return (tasks = tasks.map(task => {
    task.userId = task.userId === userId ? null : task.userId;
    return task;
  }));
};

module.exports = {
  getAll,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  deleteTasksOnBoard,
  setTaskUserIdToNull
};
