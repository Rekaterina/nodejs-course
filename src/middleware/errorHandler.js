const { errorLogger } = require('./logger');
const {BAD_REQUEST, INTERNAL_SERVER_ERROR, getStatusText} = require('http-status-codes');

class ValidationError extends Error {
	constructor() {
		super();
		this.code = BAD_REQUEST;
		this.message = getStatusText(this.code);
	}
}

const errorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    errorLogger(err.code, err.message);
    res.status(err.code).send(err.message);
  } else {
    const statusText = getStatusText(INTERNAL_SERVER_ERROR);
     errorLogger(INTERNAL_SERVER_ERROR, statusText);
     res.status(INTERNAL_SERVER_ERROR).send(statusText);
  }
};
    
module.exports = {
  errorHandler,
  ValidationError
};