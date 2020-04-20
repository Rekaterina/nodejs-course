const boardsRepo = require('./board.db.repository');
const tasksService = require('../tasks/task.service');

const getAll = () => boardsRepo.getAll();
const getBoard = id => boardsRepo.getBoard(id);
const createBoard = board => boardsRepo.createBoard(board);
const updateBoard = (data, id) => boardsRepo.updateBoard(data, id);
const deleteBoard = id => {
  boardsRepo.deleteBoard(id);
  //tasksService.deleteTasksOnBoard(id);
};

module.exports = {
  getAll,
  createBoard,
  getBoard,
  updateBoard,
  deleteBoard
};
