function reverse1(string) {
  var newStr = "";
  for (var i = 0; i < string.length; i++) {
    newStr += (string[(string.length-1) - i]);
  }
  return newStr;
}
function reverse1a() {
  var newStr = '';
  for (var i = 0; i < string.length; i++) {
    newStr = string.charAt(length - 1);
  }
  return newStr;
}
// function reverse2(string) {
//   return string.split('').reduce(function(sum, index) {
//     sum = sum.unshift(index);  // getting error that unshift is not a function?!
//     console.log(index);
//     return sum;
//   }).join('');
// }



console.log("reverse1!:" + reverse1("string love!"));
console.log("reverse 1A!:" + reverse1("string love!"));
console.log("reverse 2!: " + reverse2("backwards?!"));
console.log("reverse 3!: " + reverse2("backwards?!"));
