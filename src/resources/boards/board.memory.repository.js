let boards = [];

const getAll = async () => {
  return boards;
};

const createBoard = async (board) => {
  return boards.push(board);
};

const getBoard = async (id) => {
  return boards.find(board => board.id === id);
};

const updateBoard = async (id, data) => {
  const updatedIndex = boards.findIndex(board => board.id === id);
  return boards[updatedIndex] = { ...boards[updatedIndex], ...data };
};

const deleteBoard = async (id) => {
  const deletedIndex = boards.findIndex(board => board.id === id);
  return boards.splice(deletedIndex, 1);
};

module.exports = { 
  getAll,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard
};
