const boardsRepo = require('./board.memory.repository');
const tasksService = require('../tasks/task.service');

const getAll = () => boardsRepo.getAll();
const getBoard = id => boardsRepo.getBoard(id);
const createBoard = board => boardsRepo.createBoard(board);
const updateBoard = (id, data) => boardsRepo.updateBoard(id, data);
const deleteBoard = id => {
  boardsRepo.deleteBoard(id);
  tasksService.deleteTasksOnBoard(id);
};

module.exports = {
  getAll,
  createBoard,
  getBoard,
  updateBoard,
  deleteBoard
};
