const router = require('express').Router();
const login = require('./login.service');

router.route('/').post(async (req, res, next) => {
  try {
    const data = await login(req.body);
    res.json(data.token);
  } catch (error) {
      return next(error);
  }
});

module.exports = router;