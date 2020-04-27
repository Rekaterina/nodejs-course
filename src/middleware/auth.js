const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../common/config');
const { ValidationError } = require('../middleware/errorHandler');

const auth = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (authorization) {
      const token = authorization.slice(7, authorization.length);;
      jwt.verify(token, JWT_SECRET_KEY, (err, user) => {
        next();
      });
    } else {
      throw new ValidationError(401, 'Unauthorized');
    }
  } catch (err) {
    return next(err);
  }
};

module.exports = auth;