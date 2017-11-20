/*
Array <- Prototype that has included methods and properties
Function <-
Object <-

Prototypes:
object with properties and methods.

Properties and methods are: on objects
variables and functions are: not on objects

define objects:
  object literal, constructor, etc

Object.assign makes a copy of an objects.


Things to take notes on Objects. Functions. Arrays.

prototypes. methods.

variables.
*/
function myFunc() {
  return "hey";
}

var dates =Object.keys(students);



// var dateOjbects = dates.map(date => {
//   students.date;
// });
var dateOjbects = dates.map(date => {
  return students[date];
}).reduce(function(object, salesDate){
  return Object.assign()
}, {});

console.log();

delete key.word
