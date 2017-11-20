/* Chainzzzz

ruduce(function())

*/

function tenValues() {
  return [1,2,3,4,5,6,7,8,9,10];
}
console.log(tenValues().filter(number => number > 5).map(number => number*2).reduce(sum,0));

function sum(sum, number){
  sum+=number;
  return sum;
}
