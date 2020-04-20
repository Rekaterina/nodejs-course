const Board = require('./board.model');

const getAll = async () => {
  return Board.find({});
};

const createBoard = async board => {
  return Board.create(board);
};

const getBoard = async id => {
  return Board.findById(id);
};

const updateBoard = async (board, id) => {
  return Board.updateOne({ _id: id }, board);
};

const deleteBoard = async id => {
  return (await Board.deleteOne({ _id: id })).deletedCount;
};

module.exports = {
  getAll,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard
};
