const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  try {
    const user = await usersService.getUser(req.params.id);
    res.json(User.toResponse(user));
  } catch (err) {
    console.log(err);
    res.status(404);
    res.end('User not found');
  }
});

router.route('/').post(async (req, res) => {
  const newUser = new User(req.body);
  try {
    await usersService.createUser(newUser);
    res.json(User.toResponse(newUser));
  } catch (err) {
    console.log(err);
    res.status(400);
    res.end('Bad request');
  }
});

router.route('/:id').put(async (req, res) => {
  try {
    const updatedUser = await usersService.updateUser(req.params.id, req.body);
    res.json(User.toResponse(updatedUser));
  } catch (err) {
    console.log(err);
    res.status(400);
    res.end('Bad request');
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    await usersService.getUser(req.params.id);
    res.json();
    res.status(204);
  } catch (err) {
    console.log(err);
    res.status(404);
    res.end('User not found');
  }
});

module.exports = router;
