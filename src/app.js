const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');
const { requestLogger, processErrorLogger } = require('./middleware/logger');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use(requestLogger);

app.use('/users', userRouter, errorHandler);
app.use('/boards', boardRouter, errorHandler);
app.use('/boards', taskRouter, errorHandler);

app.use(errorHandler);

process.on('uncaughtException', (err, origin) => {
  processErrorLogger(err, 'Uncaught Exception:');
});

process.on('unhandledRejection', (reason, promise) => {
  processErrorLogger(reason, 'Unhandled Rejection:');
});

// throw new Error('Oops!');
// Promise.reject(new Error('Oops!'));

module.exports = app;
