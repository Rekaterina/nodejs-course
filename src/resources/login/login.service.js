const checkUser = require('./login.db.repository');
const bcrypt = require('bcrypt');
const { JWT_SECRET_KEY } = require('../../common/config');
const { ValidationError } = require('../../middleware/errorHandler');
const jwt = require('jsonwebtoken');

const login = async (body) => {
  const { password, login } = user;
  const isTrue = await bcrypt.compare(body.password, password);
  const user = await checkUser(body);
  if (isTrue) {
    return jwt.sign(
      { userId: user._id, login: login },
      JWT_SECRET_KEY,
      { expiresIn: '1h' }
    );
  } else {
    throw new ValidationError(401, 'Unauthorized');
  }
};

module.exports = login;