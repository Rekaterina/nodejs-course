const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getUser = (id) => usersRepo.getUser(id);
const createUser = (user) => usersRepo.createUser(user);
const updateUser = (id, data) => usersRepo.updateUser(id, data);
const deleteUser = id => usersRepo.deleteUser(id);

module.exports = {
  getAll,
  createUser,
  getUser,
  updateUser,
  deleteUser
};
