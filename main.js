// console.log("This file is linked!");
//
// var fullName = "Mayor Leodore" ;
// var dept = "Discipline";
// // var rate = [3.4,5.0,4.2];
// console.log("Teacher:" + fullName);
// console.log("department: " + dept);
// // console.log("Rating:" + rate);
//
// var rating = [2];
// var teacherName = "Mayor Leodore";
// function getRatingAvg (ratingArray) {
//   var total = 0;
//   for(var i = 0; i<ratingArray.length;i++) {
//     total += ratingArray[i];
//   }
//
//   return total/ratingArray.length;
// }
//
// function addTeacherRating(ratingArray,newRating){
//   ratingArray.push(parseInt(newRating));
//   return ratingArray;
// }
//
//
// // function getProfessorRating() {
// 	// var profRating = prompt("We would like for you to review . Please enter a rating between 0.0 - 5.0?");
//
//   // if(profRating !== null && profRating >=0 && profRating <= 5.0) {
//   	// rating.push(profRating);
//     // teacher1.addRating(profRating);
//     // var avg = teacher1.getRatingAvg();
//     // alert("Thanks for you review! "+ teacherName + " average rating is now . " + avg);
//   // }
// // }
//
//  getProfessorRating();
//
// var teacher1 = {
//      name:"Mayor Leodore" ,
//      department:"Discipline",
//      ratings: [3.5, 1.0, 5.0],
//      addRating: function (newRating) {
//         this.ratings.push(newRating);
//     },
//     getRatingAvg: function () {
//       var total = 0;
//       for(var i = 0; i<this.ratings.length;i++) {
//         total += this.ratings[i];
//       }
//       return total/this.ratings.length;
//     }
// // };
//
// // var teacher2 = {
//      name:"Mayor Bellwether" ,
//      department:"Smart",
//      ratings: [3.5, 1.0, 5.0],
//      addRating: function (newRating) {
//         this.ratings.push(newRating);
//     },
//     getRatingAvg: function () {
//       var total = 0;
//       for(var i = 0; i<this.ratings.length;i++) {
//         total += this.ratings[i];
//       }
//       return total/this.ratings.length;
//     }
// };
// var teacher3 = {
//      name:"Chief Bogo" ,
//      department:"Action",
//      ratings: [3.5, 1.0, 5.0],
//      addRating: function (newRating) {
//         this.ratings.push(newRating);
//     },
//     getRatingAvg: function () {
//       var total = 0;
//       for(var i = 0; i<this.ratings.length;i++) {
//         total += this.ratings[i];
//       }
//       return total/this.ratings.length;
//     }
// };
// var teacher4 = {
//      name:"Inspector Judy" ,
//      department:"Intern",
//      ratings: [3.5, 1.0, 5.0],
//      addRating: function (newRating) {
//         this.ratings.push(newRating);
//     },
//     getRatingAvg: function () {
//       var total = 0;
//       for(var i = 0; i<this.ratings.length;i++) {
//         total += this.ratings[i];
//       }
//       return total/this.ratings.length;
//     }
// };
// var teacher5 = {
//      name:"Inspector Nick" ,
//      department:"Friend",
//      ratings: [3.5, 1.0, 5.0],
//      addRating: function (newRating) {
//         this.ratings.push(newRating);
//     },
//     getRatingAvg: function () {
//       var total = 0;
//       for(var i = 0; i<this.ratings.length;i++) {
//         total += this.ratings[i];
//       }
//       return total/this.ratings.length;
//     }
// };

function Teacher (name,department,ratings){
  this.name = name;
  this.department = department;
  this.ratings = ratings;
}

Teacher.prototype = {
  addRating: function (newRating, ratings) {
     ratings.push(newRating);
     return ratings;
 },
 getRatingAvg: function (ratings) {
   var total = 0;
   for(var i = 0; i<ratings.length;i++) {
     total += ratings[i];
   }
   return total/ratings.length;
 }
};

var teacherJack = new Teacher("Jack Smith", "Art", [5.0, 4.3, 4.1]);
var teacherKelly = new Teacher("Kelly george", "Music", [5.0, 4.3, 4.1]);
var teacherBob = new Teacher("Bob Smith", "Math", [5.0, 4.3, 4.1]);

console.log(teacherJack.name)
console.log(teacherJack.department)
console.log(teacherJack.ratings)
console.log(Teacher.prototype.addRating(3, teacherJack.ratings));
console.log(Teacher.prototype.getRatingAvg(teacherJack.ratings));

console.log(teacherKelly.name)
console.log(teacherKelly.department)
console.log(teacherKelly.ratings)
console.log(Teacher.prototype.addRating(5, teacherKelly.ratings));
console.log(Teacher.prototype.getRatingAvg(teacherKelly.ratings));

console.log(teacherBob.name)
console.log(teacherBob.department)
console.log(teacherBob.ratings)
console.log(Teacher.prototype.addRating(4, teacherBob.ratings));
console.log(Teacher.prototype.getRatingAvg(teacherBob.ratings));
