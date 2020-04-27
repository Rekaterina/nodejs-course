const Task = require('./task.model');

const getAll = async () => {
  return Task.find({});
};

const createTask = async (task, boardId ) => {
  return Task.create({ ...task, boardId });
};

const getTask = async (boardId, id) => {
  return Task.findOne({boardId, _id: id});
};

const updateTask = async (boardId, id, data) => {
  return Task.updateOne({ boardId, _id: id }, data);
};

const deleteTask = async (boardId, id ) => {
  return (await Task.deleteOne({ boardId, _id: id })).ok;
};

const deleteTasksOnBoard = async boardId => {
  return (await Task.deleteMany({ boardId }));
};

const setTaskUserIdToNull = async userId => {
  await Task.updateMany({ userId }, { userId: null });
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
