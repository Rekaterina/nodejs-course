const usersRepo = require('./user.db.repository');
const tasksService = require('../tasks/task.service');

const getAll = () => usersRepo.getAll();
const getUser = id => usersRepo.getUser(id);
const createUser = user => usersRepo.createUser(user);
const updateUser = (data, id) => usersRepo.updateUser({ ...data, id });
const deleteUser = async id => {
  await tasksService.setTaskUserIdToNull(id);
  await usersRepo.deleteUser(id);
  
};

module.exports = {
  getAll,
  createUser,
  getUser,
  updateUser,
  deleteUser
};
