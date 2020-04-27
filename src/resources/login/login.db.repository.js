const User = require('../users/user.model');
const { ValidationError } = require('../../middleware/errorHandler');

const checkUser = async (body) => {
  const user = await User.findOne(body.login);
  if (user) {
    return user;
  } else {
    throw new ValidationError(403, 'Forbidden');
  }
};

module.exports = checkUser;