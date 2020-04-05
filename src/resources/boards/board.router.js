const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards.map(Board.toResponse));
});

router.route('/:id').get(async (req, res) => {
  try {
    const board = await boardsService.getBoard(req.params.id);
    res.json(Board.toResponse(board));
  } catch (err) {
    console.log(err);
    res.status(404);
    res.end('Board not found');
  }
});

router.route('/').post(async (req, res) => {
  const newBoard = new Board(req.body);
  try {
    await boardsService.createBoard(newBoard);
    res.json(Board.toResponse(newBoard));
  } catch (err) {
    console.log(err);
    res.status(400);
    res.end('Bad request');
  }
});

router.route('/:id').put(async (req, res) => {
  try {
    const updatedBoard = await boardsService.updateBoard(req.params.id, req.body);
    res.json(Board.toResponse(updatedBoard));
  } catch (err) {
    console.log(err);
    res.status(400);
    res.end('Bad request');
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    await boardsService.deleteBoard(req.params.id);
    res.json();
    res.status(204);
  } catch (err) {
    console.log(err);
    res.status(404);
    res.end('Board not found');
  }
});

module.exports = router;
