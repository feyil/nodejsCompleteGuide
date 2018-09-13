const Movie = require("../models/movie").Movie;
const {Genre, validate} = require("../models/genre");
const mongoose = require("mongoose");
const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
    const movies = await Movie.find().sort("title");
    res.send(movies);
});

router.post("/", async (req, res) => {

    let genreMemory = new Genre(req.body.genre);
    genreMemory = await genreMemory.save();

    let movie = new Movie({
        title: req.body.title,
        genre: genreMemory,
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    });

    movie = await movie.save();
    
    res.send(movie);
});

module.exports = router;