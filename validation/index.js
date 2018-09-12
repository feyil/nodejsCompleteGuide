const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mongo-exercises")
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error("Could not connnect to MongoDB", err));


const courseSchema = new mongoose.Schema({
    name: {type: String, required: true}, // name is required
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now},
    isPublished: Boolean
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
    const course = new Course({
      //  name: "Angular Course",
        author: "Furkan",
        tags: ["angular", "frontend"],
        isPublished: true,
        price: 15
    });

    try {
        const result = await course.save();
        console.log(result);
    }
    catch(ex) {
        console.log(ex.message);
    }

}

createCourse();