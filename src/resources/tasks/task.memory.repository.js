let tasks = [];

const getAll = async () => {
  return tasks;
};

const createTask = async (task, boardId) => {
  const newTask = { ...task, boardId };
  tasks.push(newTask);
  return newTask;
};

const getTask = async (boardId, id) => {
  return tasks.find(task => task.boardId === boardId && task.id === id);
};

const updateTask = async (boardId, id, data) => {
  const updatedIndex = tasks.findIndex(
    task => task.boardId === boardId && task.id === id
  );
  return (tasks[updatedIndex] = { ...tasks[updatedIndex], ...data });
};

const deleteTask = async (boardId, id) => {
  const deletedIndex = tasks.findIndex(
    task => task.boardId === boardId && task.id === id
  );
  return tasks.splice(deletedIndex, 1);
};

const deleteTasksOnBoard = async boardId => {
  tasks = tasks.filter(task => task.boardId !== boardId);
};

const setTaskUserIdToNull = async userId => {
  return (tasks = tasks.map(task => {
    task.userId = task.userId === userId ? null : task.userId;
    return task;
  }));
};

module.exports = {
  getAll,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  deleteTasksOnBoard,
  setTaskUserIdToNull
};
