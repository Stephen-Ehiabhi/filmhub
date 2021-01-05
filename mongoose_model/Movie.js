const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
    min: 15,
    max: 190,
  },
  writers: {
    type: String,
    required: true,
  },
  length: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  actors: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  thriller: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  movie: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const movies = mongoose.model("Movie", movieSchema);

module.exports = movies;
