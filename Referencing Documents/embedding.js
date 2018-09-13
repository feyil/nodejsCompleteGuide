const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  authors: {
    type: [authorSchema],
    required: true
  }
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

async function updateAuthor(courseId) {
  const course = await Course.findById(courseId);
  course.author.name = "Furkan Emre";
  course.save();

  /*
  const course = await Course.update({ _id: courseId}, {
    $set {
      "author.name": "John Smith"

      // Update directly in database

      // $unset
    }
  });
  */
} 

async function addAuthor(courseId, author) {
  const course = await Course.findById(courseId);
  course.authors.push(author);
  course.save();
}

async function removeAuthor(courseId, authorId) {
  const course = await Course.findById(courseId);
  const author = course.authors.id(authorId);
  author.remove();
  course.save();
}

//createCourse('Node Course', [
//  new Author({ name: 'Mosh' }),
//  new Author({ name: "Furkan"})]);

//updateAuthor("5b9a4748ce5b803c111772b4")

// addAuthor("5b9a4bbff512bd41479d0458", new Author({ name: "Ammy"}));

removeAuthor("5b9a4bbff512bd41479d0458", "5b9a4cae8236b7425375b006");