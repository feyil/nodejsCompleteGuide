
const express = require("express");
const Joi = require("joi");

const app = express();
app.use(express.json()) // enable json

function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(genre, schema);
}

const genres = [
    { id: 1, name: "Action"},
    { id: 2, name: "Drama"},
    { id: 3, name: "Horror"},
    { id: 4, name: "Adventure"}
]

app.get("/", (req, res) =>{
    res.send("Vidly Genre API");
});

// Listing all the genres
app.get("/api/genres", (req, res) => {
    res.send(genres);
});

// Listing specific genre
app.get("/api/genres/:id", (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));

    //If not found send 404
    if (!genre) {
        return res.status(404).send("The genre given id was not found");
    }

    res.send(genre);

});

// Adding new genre
app.post("/api/genres", (req,res) => {
    const result = validateGenre(req.body);
    if(result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const genre = {
        id: genres.length + 1,
        name: req.body.name
    };

    genres.push(genre);
    res.send(genre);
});

// Updating an existing genre
app.put("/api/genres/:id", (req, res) => {
    // Look up the genre
    // If not found, return 404
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send("The genre with the given ID was not found");

    // Validate
    // If invalid, return 400 - bad request

    const result = validateGenre(req.body);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    // Update genre
    // Return the updated genre
    genre.name = req.body.name;
    res.send(genre);
});

// Deleting existing genre
app.delete("/api/genres/:id", (req, res) => {
    // Look up the genre
    // If the genre was not found return 404
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send("The genre with given ID was not found.");

    // Delete
    const index = genres.indexOf(genre);
    genres.splice(index, 1);

    // Return the same genre
    res.send(genre);
});


//PORT create server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
