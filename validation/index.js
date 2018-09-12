const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mongo-exercises")
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error("Could not connnect to MongoDB", err));


const courseSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 255,
        // match: /pattern/ // regular expression can be applied
    }, // name is required (mongoose) 
    category: {
        type: String,
        required: true,
        enum: ["web", "mobile", "network"]
    },
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now},
    isPublished: Boolean,
    price :{
        type: Number,
        required: function() { return this.isPublished; },
        min: 10,
        max: 200
    }
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
    const course = new Course({
        name: "Angular Course",
        category: "-",
        author: "Furkan",
        tags: ["angular", "frontend"],
        isPublished: true,
        price: 15
    });

    try {
        // await course.validate();
        const result = await course.save();
        console.log(result);
    }
    catch(ex) {
        console.log(ex.message);
    }

}

createCourse();