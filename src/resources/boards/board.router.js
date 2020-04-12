const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res, next) => {
  try {
  const boards = await boardsService.getAll();
  res.json(boards.map(Board.toResponse));
  } catch (err) {
      return next(err);
  }
});

router.route('/:id').get(async (req, res, next) => {
  try {
    const board = await boardsService.getBoard(req.params.id);
    res.json(Board.toResponse(board));
  } catch (err) {
      return next(err);
    }
});

router.route('/').post(async (req, res, next) => {
  const newBoard = new Board(req.body);
  try {
    await boardsService.createBoard(newBoard);
    res.json(Board.toResponse(newBoard));
  } catch (err) {
      return next(err);
    }
});

router.route('/:id').put(async (req, res, next) => {
  try {
    const updatedBoard = await boardsService.updateBoard(req.params.id, req.body);
    res.json(Board.toResponse(updatedBoard));
  } catch (err) {
      return next(err);
    }
});

router.route('/:id').delete(async (req, res, next) => {
  try {
    await boardsService.deleteBoard(req.params.id);
    res.json();
    res.status(204);
  } catch (err) {
      return next(err);
    }
});

module.exports = router;
