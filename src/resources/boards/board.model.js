const uuid = require('uuid');
const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema(
  {
    title: String,
    _id: {
      type: String,
      default: uuid
    },
    columns: {
      type: Array,
      default: []
    },
  },
  { versionKey: false }
);

boardSchema.statics.toResponse = board => {
  const { id, columns, title } = board;
  return { id, columns, title };
};

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
