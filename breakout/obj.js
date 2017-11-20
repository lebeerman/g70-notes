// OBJECTS (/Users/DB/g70/breakouts/objects.md)


//-- OBJECT LITERAL --
// var dan = {
//   name: 'Dan',
//   eyecolor: 'PURE BLACK',
//   hometown: 'STL',
//   age: 46,
//   pets: [{
//     name: 'lil kitty', age: 'mad old', type: 'cat'
//   },{
//     name: 'Doggo', age: 6, type: 'dog'
//   }]
// };

//-- 'new' KEYWORD --
// var dan = new Object();
// dan.name = 'Dan';
// dan.eyecolor = 'hazel';

// Dot Notation - '.' points into the object scope.
// console.log(Object.keys(dan)); //returns keys in an array
// console.log(Object.values(dan)); //returns an array of values of Objects
// --- EXAMPLES ---
// var newDan = {
//   favoriteColor: 'blue',
//   favoriteToy: 'Ninja Turtles'
// }
//
// Object.assign(dan, newDan);
//
// console.log(newDan);

// CONSTRUCTOR functions

function Person(name, hobby, eyecolor){
  this.name = name;
  this.hobby = hobby;
  this.eyecolor = eyecolor;
}
