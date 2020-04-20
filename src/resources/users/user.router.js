const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res, next) => {
  try {
    const users = await usersService.getAll();
    res.json(users.map(User.toResponse));
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').get(async (req, res, next) => {
  try {
    const user = await usersService.getUser(req.params.id);
    res.json(User.toResponse(user));
  } catch (err) {
    return next(err);
  }
});

router.route('/').post(async (req, res, next) => {
  const newUser = new User(req.body);
  try {
    await usersService.createUser(newUser);
    res.json(User.toResponse(newUser));
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').put(async (req, res, next) => {
  try {
    const updatedUser = await usersService.updateUser(req.body, req.params.id);
    res.json(User.toResponse(updatedUser));
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').delete(async (req, res, next) => {
  try {
    await usersService.deleteUser(req.params.id);
    res.json();
    res.status(204);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
