
const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views") // default

app.use(express.json());

const courses = [
    {id: 1, name: "course1"},
    {id: 2, name: "course2"},
    {id: 3, name: "course3"},
];

app.get("/", (req, res) => {
    res.render("index", {title:"My Express App", message:"Hello" });
});

app.listen(3000, () => {
    console.log("Listening on port 3000...");
});