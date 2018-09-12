const mongoose = require("mongoose");

// When fisrt itme it created automatically
mongoose.connect("mongodb://localhost/mongo-exercises")
            .then(() => console.log("Connected to MongoDB"))
            .catch(err => console.error("Could not connect to MongoDB", err));

const courseSchema = new mongoose.Schema({});

const Course = mongoose.model("Course", courseSchema);

async function getCourses() {
    const courses = await Course
                            .find({ tags:"backend"})
                            .sort({name: 1})
                            .select({name:1, author:1});
    console.log(courses);
}

getCourses();

