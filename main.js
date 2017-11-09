console.log("This file is linked!");

var fullName = "Mayor Leodore" ;
var dept = "Discipline";
// var rate = [3.4,5.0,4.2];
console.log("Teacher:" + fullName);
console.log("department: " + dept);
// console.log("Rating:" + rate);

var rating = [2];
var teacherName = "Mayor Leodore";
function getRatingAvg (ratingArray) {
  var total = 0;
  for(var i = 0; i<ratingArray.length;i++) {
    total += ratingArray[i];
  }

  return total/ratingArray.length;
}

function addTeacherRating(ratingArray,newRating){
  ratingArray.push(parseInt(newRating));
  return ratingArray;
}


function getProfessorRating() {
	var profRating = prompt("We would like for you to review . Please enter a rating between 0.0 - 5.0?");

  if(profRating !== null && profRating >=0 && profRating <= 5.0) {
  	// rating.push(profRating);
    var newRatingArray = addTeacherRating(rating,profRating);
    var avg = getRatingAvg(newRatingArray);
    alert("Thanks for you review! "+ teacherName + " average rating is now . " + avg);
  }
}

// getProfessorRating();



var courses = [
	["Discipline", "Acedamy"],
  ["Smart", "Knowlwdge"],
  ["Action", "Acedamy"],
  ["Speed","Acedamy"],
  ["Crime","Acedamy"]
];


function getCourses (courses, department) {
	var classes = [];
	for(var i =0; i<courses.length; i++) {
  	for(var j =0; j<courses[i].length; j++) {
    	if((courses[i][j+1]) === department) {
      	classes.push(courses[i][j]);
      }
    }
  }
  return classes;
}

function askForCourse() {
	var department = prompt("Please enter a department to know the courses");
  if(department !== null) {
    var listOfCourses = getCourses(courses, department);
    alert("Thanks for! " + listOfCourses);
  }
}

askForCourse();
