const mongoose = require("mongoose");

// When first time it creates playground.db automatically
mongoose.connect("mongodb://localhost/playground")
    .then(() => console.log("Connected to MongoDB.."))
    .catch(err => console.error("Could not connec to MongoDB", err));


const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now},
    isPublished: Boolean
});

// Classes, objects
// Course nodeCourse

const Course = mongoose.model("Course", courseSchema);
async function createCourse() {
    const course = new Course({
        name: "Angular Course",
        author: "Mosh",
        tags: ["angular", "frontend"],
        isPublished: true
    });
    
    const result = await course.save();
    console.log(result);
}

createCourse();