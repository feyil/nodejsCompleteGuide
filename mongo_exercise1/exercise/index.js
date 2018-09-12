const mongoose = require("mongoose");

// When fisrt itme it created automatically
mongoose.connect("mongodb://localhost/mongo-exercises")
            .then(() => console.log("Connected to MongoDB"))
            .catch(err => console.error("Could not connect to MongoDB", err));

            const courseSchema = new mongoose.Schema({
                name: String,
                author: String,
                tags: [String],
                date: { type: Date, default: Date.now},
                isPublished: Boolean
            });
            
const Course = mongoose.model("Course", courseSchema);

async function getCourses() {
    const courses = await Course
                            .find({ tags:"backend"})
                            .sort({name: 1})
                            .select({name:1, author:1});
    console.log(courses);
}

// getCourses();

async function exercise2() {
    const courses = await Course
                            .find({isPublished: true})
                            .or([{tags: "frontend"}, {tags: "backend"}])
                            .sort({price: -1})
                            .select({name:1, author: 1, price: 1});
    console.log(courses);
}

//exercise2();

async function exercise3() {
    const courses = await Course
                            .find({isPublished: true})
                            .or([{price: {$gte : 15}}, {name: /.*by.*/}]);


    console.log(courses);
}

//exercise3();

async function updateCourse(id) {
    // Approach: Query First
    // findById()
    // Modify its properties
    // save()

    // Approach: Update first
    // Update directly
    // Optionally: get the updated document

    console.log(id);
    try{
        const course = await Course.findById(id);



    // if(!course) return;
 
     course.isPublished = true;
     course.author = "Another Author";
     
     const result = await course.save();
     console.log(result);
    }
    catch(e) {
        console.log("Erroror", e);
    }
  
    /*
    course.set({
        isPublished: true,
        author: "Another Author"
    });
    */
}
//exercise2();
//updateCourse('5a68fdc3615eda645bc6bdec'); // database related issue it didnt work this database I will check later

// I solved as I said it is about ObjectId("") prefix



//Update First

async function updateCourse2(id) {
    const result = await Course.update({_id:id}, {
        $set: { // it update in the database
            author: "Mosh",
            isPublished: false
        }
    });
    // findByIdAndUpdate
    console.log(result);
}

// updateCourse2("5a68fdc3615eda645bc6bdec");

async function removeCourse(id) {
    const result = await Course.deleteOne({_id: id});
    console.log(result);

    // deleteMany()
    // Course.findByIdAndRemove()
}

removeCourse("5a68fdc3615eda645bc6bdec");