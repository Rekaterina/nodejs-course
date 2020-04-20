const User = require('./user.model');

const getAll = async () => {
  return User.find({});
};

const createUser = async user => {
  return User.create(user);
};

const getUser = async id => {
  return User.findById(id);
};

const updateUser = async userToUpdate => {
  return User.updateOne({ _id: userToUpdate.id }, userToUpdate);
};

const deleteUser = async id => {
  return (await User.deleteOne({ _id: id })).deletedCount;
};

module.exports = {
  getAll,
  getUser,
  createUser,
  updateUser,
  deleteUser
};
