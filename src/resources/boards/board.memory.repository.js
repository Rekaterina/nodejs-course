const { ValidationError } = require('../../middleware/errorHandler');

let boards = [];

const getAll = async () => {
  return boards;
};

const createBoard = async (board) => {
  return boards.push(board);
};

const getBoard = async (id) => {
  const findBoard = boards.find(board => board.id === id);
  if (!findBoard) {
    throw new ValidationError();
  } else {
    return findBoard;
  }
};

const updateBoard = async (id, data) => {
  const updatedIndex = boards.findIndex(board => board.id === id);
  if (!updatedIndex) {
    throw new ValidationError();
  } else {
    return boards[updatedIndex] = { ...boards[updatedIndex], ...data };
  }
};

const deleteBoard = async (id) => {
  const deletedIndex = boards.findIndex(board => board.id === id);
  if (!deletedIndex) {
    throw new ValidationError();
  } else {
    return boards.splice(deletedIndex, 1);
  }
};

module.exports = { 
  getAll,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard
};
