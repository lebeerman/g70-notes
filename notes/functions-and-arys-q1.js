// Functions Notes - array methods & shit.
// ----------------------------
// map, filter, and reduce can only get called on arrays!!!!!!!
// Expression - hoistable!!! function double(args) {}
//
// Declaration - no hoisting. var double = function(args) {}
//
// map => do function to every item in an array and return a new array
//
// filter => pull items from an array check them with a function and return the new filtered array
//
// reduce => check everything and return a string.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
//
// call reduce() on the array, passing a callback example:
// that adds all the values together
// var result = numbers.reduce(function(accumulator, currentValue, --> INDEX ) {
//     return accumulator + currentValue;
// });
//
const number = [1,2,3];
const sum = number.reduce(function(sum, number) {
  return sum += number;

})

const numberArray = [2,4,6];

const doubledArray = numberArray
student.reduce(function(theObject, dataItem, index) {
  /* This is why switches exist!!!!
    if(index == 0){
      theObject.id = dataItem;
    } else if (index == 1) {
      theObject.firstName = dataItem;
    } else if (index == 2) {
      theObject.lastName = dataItem;
    }
  The below is much easier to read!!! */
  switch (index) {
    case 0:
    theObject.id = dataItem;
      break;
    case 1:
    theObject.firstName = dataItem;
      break;
    case 2:
    theObject.lastName = dataItem;
      break;
    default:
    theObject = theObject;
  }
})
// arrow funtions example
console.log([1,2,3].filter(number => number * 2).reduce((sum,number) => sum += number, 0));
