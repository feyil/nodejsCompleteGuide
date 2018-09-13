const Joi = require("joi");
const mongoose = require("mongoose");
const genreSchema = require("./genre").genreSchema;

const Movie = mongoose.model("Movie", new mongoose.Schema({
    title: String,
    genre: genreSchema,
    numberInStock: Number,
    dailyRentalRate: Number
}));


exports.Movie = Movie;