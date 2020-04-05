let users = [];

const getAll = async () => {
  return users;
};

const createUser = async (user) => {
  return users.push(user);
};

const getUser = async (id) => {
  return users.find(user => user.id === id);
};

const updateUser = async (id, data) => {
  const updatedIndex = users.findIndex(user => user.id === id);
  return users[updatedIndex] = { ...users[updatedIndex], ...data };
};

const deleteUser = async (id) => {
  return users.filter(user => user.id === id);
};

module.exports = { 
  getAll,
  getUser,
  createUser,
  updateUser,
  deleteUser
};
