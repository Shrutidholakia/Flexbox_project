
// var courses = [
//   {name: "Discipline", department:"Academy", teacher:{
//        name:"Mayor Leodore" ,
//        department:"Discipline",
//        ratings: [3.5, 1.0, 5.0],
//        addRating: function (newRating) {
//           this.ratings.push(newRating);
//       },
//       getRatingAvg: function () {
//         var total = 0;
//         for(var i = 0; i<this.ratings.length;i++) {
//           total += this.ratings[i];
//         }
//         return total/this.ratings.length;
//       }
//   }, semester: "Spring 2018"},
//   {name: "Smart", department:"Knowlwdge", teacher:{
//        name:"Mayor Bellwether" ,
//        department:"Smart",
//        ratings: [3.5, 1.0, 5.0],
//        addRating: function (newRating) {
//           this.ratings.push(newRating);
//       },
//       getRatingAvg: function () {
//         var total = 0;
//         for(var i = 0; i<this.ratings.length;i++) {
//           total += this.ratings[i];
//         }
//         return total/this.ratings.length;
//       }
//   }, semester: "Spring 2018"},
//   {name: "Action", department:"Academy", teacher:{
//        name:"Chief Bogo" ,
//        department:"Action",
//        ratings: [3.5, 1.0, 5.0],
//        addRating: function (newRating) {
//           this.ratings.push(newRating);
//       },
//       getRatingAvg: function () {
//         var total = 0;
//         for(var i = 0; i<this.ratings.length;i++) {
//           total += this.ratings[i];
//         }
//         return total/this.ratings.length;
//       }
//   }, semester: "Spring 2018"},
//   {name: "Speed", department:"Academy", teacher:{
//        name:"Inspector Judy" ,
//        department:"Intern",
//        ratings: [3.5, 1.0, 5.0],
//        addRating: function (newRating) {
//           this.ratings.push(newRating);
//       },
//       getRatingAvg: function () {
//         var total = 0;
//         for(var i = 0; i<this.ratings.length;i++) {
//           total += this.ratings[i];
//         }
//         return total/this.ratings.length;
//       }
//   }, semester: "Spring 2018"},
//   {name: "Crime", department:"Academy", teacher:{
//        name:"Inspector Nick" ,
//        department:"Friend",
//        ratings: [3.5, 1.0, 5.0],
//        addRating: function (newRating) {
//           this.ratings.push(newRating);
//       },
//       getRatingAvg: function () {
//         var total = 0;
//         for(var i = 0; i<this.ratings.length;i++) {
//           total += this.ratings[i];
//         }
//         return total/this.ratings.length;
//       }
//   }, semester: "Spring 2018"}
// ];
//
//
// function getCourses (courses, department) {
// 	var classes = [];
// 	for(var i =0; i<courses.length; i++) {
//     var course = courses[i];
//
//     console.log(course.teacher);
//   	// for(var j =0; j<courses[i].length; j++) {
//     	if(course.department === department) {
//       	classes.push(course.name);
//       }
//     // }
//
//   }
//   return classes;
// }
//
// function askForCourse() {
// 	var department = prompt("Please enter a department to know the courses");
//   if(department !== null) {
//     var listOfCourses = getCourses(courses, department);
//     alert("Thanks for! " + listOfCourses);
//   }
// }
// askForCourse();
//
// function Courses (name,department,teacher,semester){
//   this.name = name;
//   this.department = department;
//   this.teacher = teacher;
//   this.semester = semester;
// }
//
// function Teacher (name,department,ratings){
//   this.name = name;
//   this.department = department;
//   this.ratings = ratings;
// }
//
// Teacher.prototype = {
//   addRating: function (newRating, ratings) {
//      ratings.push(newRating);
//      return ratings;
//  },
//  getRatingAvg: function (ratings) {
//    var total = 0;
//    for(var i = 0; i<ratings.length;i++) {
//      total += ratings[i];
//    }
//    return total/ratings.length;
//  }
// };
//
// var teacherJack = new Teacher("Jack Smith", "Art", [5.0, 4.3, 4.1]);
// var teacherKelly = new Teacher("Kelly george", "Music", [5.0, 4.3, 4.1]);
// var teacherBob = new Teacher("Bob Smith", "Math", [5.0, 4.3, 4.1]);
//
//
// var coursesArt = new Courses("Art","Academy",teacherJack,"Spring 2018");
// var coursesMusic = new Courses("Music", "Academy", teacherKelly,"Spring 2018");
// var coursesMath = new Courses("Math", "Academy",teacherBob,"Spring 2018");
//
//
// console.log(coursesArt.teacher);

function Student (name, major, email, avgGPA, courses){
  this.name = name;
  this.major = major;
  this.email = email;
  this.avgGPA = avgGPA;
  this.courses = courses;
}

var studentsloth = new Student("Sloth","Speed","sloth@cg.edu",2.5,[]);
var studentfinn = new Student("Finn", "Academy", "finn@cg.edu",3.5,[]);
var studentcheetah = new Student("Cheetah", "Academy","cheetah@cg.edu",4.0,[]);

Student.prototype = {
    addCourse: function (newCourse,student){
          student.courses.push(newCourse);
          return student;
    },
  dropCourse: function (oldCourse,student){
        student.courses.pop(oldCourse);
        return student;
  },
  changeCourse: function (changeCourse,student){
    student.major = changeCourse ;
    return student;
  }
};

console.log(Student.prototype.addCourse("speed work", studentsloth));
console.log(studentsloth.courses);
console.log(Student.prototype.addCourse("Crime", studentfinn));
console.log(studentfinn.courses);
console.log(Student.prototype.addCourse("Dispatcher", studentcheetah));
console.log(studentcheetah.courses);

// function enterGraduationYear(){
//   var month = prompt("Please enter your month of your graduation");
//   var year = prompt("Please enter your year of your graduation");
//   if (month === null && year === null){
//     alert("Please enter your graduation Date");
//      else {
//        if (year >= '2026') {
//
//             alert("whoa, college is some years away...")
//
//           } else
//     if ( month === 'may' || year === '2018'){
//       welcomeCollegeStudent('Senior');
//     } else {
//         welcomeHsStudent('Junior');
//       }
//         }
//       }
//
//
//
//
// enterGraduationYear();
//
// function welcomeCollegeStudent(type){
//
// alert('Welcome ' + type);
//
// }
//
// function welcomeHsStudent(year){
//
// alert("You're still a " + year + " in high school!");
//
// }
