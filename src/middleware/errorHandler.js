const { errorLogger } = require('./logger');
const {BAD_REQUEST, INTERNAL_SERVER_ERROR, getStatusText} = require('http-status-codes');

class ValidationError extends Error {
	constructor(code, message) {
		super();
		this.code = code;
		this.message = message;
	}
}

const errorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    errorLogger(err.code, err.message);
    res.status(err.code).send();
  } else {
    const statusText = getStatusText(INTERNAL_SERVER_ERROR);
     errorLogger(INTERNAL_SERVER_ERROR, statusText);
     res.status(INTERNAL_SERVER_ERROR).send();
  }
};
    
module.exports = {
  errorHandler,
  ValidationError
};