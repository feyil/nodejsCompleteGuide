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

async function getCourses() {
    // eq (equal)
    // ne (not equal)
    // gt (greater than)
    // gte (greater than or equal to)
    // lt (less than)
    // lte (less than or equal to)
    // in
    // nin (not in)


    // const courses = await Course.find(); // Listing all items
    const courses = await Course
                  //          .find({ author:"Mosh", isPublished: true})
                           // .find({price: { $gte: 10, $lte: 20}})
                            .find({price: { $in: [10, 50, 20]}})
                            .limit(10)
                            .sort({name:1})
                            .select({name: 1, tags: 1});
    console.log(courses);
}

// createCourse();
getCourses();