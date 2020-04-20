const mongoose = require('mongoose');
const { MONGO_CONNECTION_STRING } = require('../common/config');
const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');

const users = [
  new User({ name: 'user1', login: 'login1', password: 'password1' }),
  new Task({ name: 'user2', login: 'login2', password: 'password2' })
];

const boards = [
  new Board({
    title: 'board1',
    columns: [
      { title: 'column1', order: 1 },
      { title: 'column2', order: 2 }
    ]
  }),
  new Board({
    title: 'board2',
    columns: [
      { title: 'column3', order: 3 },
      { title: 'column4', order: 4 }
    ]
  })
];

const tasks = [
  new Task({
    title: 'task1',
    order: 1,
    description: 'description1'
  })
];

const connectToDB = cb => {
  mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    users.forEach(user => user.save());
    boards.forEach(board => board.save());
    tasks.forEach(task => task.save());
    console.log('Connected!');
    cb();
  });
};

module.exports = { connectToDB };
