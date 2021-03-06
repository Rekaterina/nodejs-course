const { ValidationError } = require('../../middleware/errorHandler');

let users = [];

const getAll = async () => {
  return users;
};

const createUser = async (user) => {
  return users.push(user);
};

const getUser = async (id) => {
  const findUser = users.find(user => user.id === id);
  if (!findUser) {
    throw new ValidationError();
  } else {
    return findUser;
  }
};

const updateUser = async (id, data) => {
  const updatedIndex = users.findIndex(user => user.id === id);
  if (!updatedIndex) {
    throw new ValidationError();
  } else {
    return users[updatedIndex] = { ...users[updatedIndex], ...data };
  }
};

const deleteUser = async (id) => {
  const deletedIndex = users.findIndex(user => user.id === id);
  if (!deletedIndex) {
    throw new ValidationError();
  } else {
    return users.splice(deletedIndex, 1);
  }
};

module.exports = { 
  getAll,
  getUser,
  createUser,
  updateUser,
  deleteUser
};
