const express = require('express');
const Joi = require("joi");
const mongoose = require("mongoose");
const router = express.Router();

// Connect to the MongoDB
mongoose.connect("mongodb://localhost/vidly")
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error("Could not connect to MongoDB", err));

const genreSchema = new mongoose.Schema({
  name: String
});

const Genre = mongoose.model("Genre", genreSchema);

async function createGenre(genreName) {
  const genre = new Genre({
    name: genreName
  });

  const result = await genre.save();
  console.log(result);
  return result;
}

// createGenre("Action");
// createGenre("Horror");
// createGenre("Romance");

async function getGenres(filter) {
  try {
    const genres = await Genre
    .find(filter);
    console.log(genres);
    return genres;
  }
  catch(ex) {
    console.error("AAAAAA");
  }
}


router.get('/', (req, res) => {
  getGenres({}).then((genres) => res.send(genres))
             .catch(err => console.error("Something bad happened :P", err));
  
});

router.post('/', (req, res) => {
  const { error } = validateGenre(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  createGenre(req.body.name)
        .then((result) => res.send(result))
        .catch(err => console.error("Something bad happened :P"));
});

router.put('/:id', (req, res) => {
  
  Genre.findById(req.params.id)
          .then((genre) => {
            if (!genre) return res.status(404).send('The genre with the given ID was not found.');

            const { error } = validateGenre(req.body); 
            if (error) return res.status(400).send(error.details[0].message);
            
            genre.name = req.body.name;

            genre.save()
                    .then((result) => {
                      console.log(result);
                      res.send(result);
                    })
                    .catch(err => console.log(err));

          }).catch(err => res.status(404).send("Bom"));
});

router.delete('/:id', (req, res) => {
  Genre.deleteOne({_id: req.params.id})
          .then((genre) => {
            if (!genre) return res.status(404).send('The genre with the given ID was not found.');
            res.send(genre);
          })
          .catch((err) => res.status(404).send("Delete Bom"));

});

router.get('/:idGenre', (req, res) => {
  const genre = getGenres({
    _id: req.params.idGenre
  }).then((genre) => {
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');
    res.send(genre);
  })
    .catch((err) => console.err("Something bad happened :P"));
  
});

function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(genre, schema);
}

module.exports = router;