// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
// //could use toAdd by doing the following
// add(toAdd[0], toAdd[1])
// //this get more complex though with more arguments
//
// //spread operator ...
// console.log(add(...toAdd));


// var groupA = ['Jen', 'Cory'];
// var groupB = ['Dave'];
// //will the ... the values within groupA get put into the final array
// //without the ... the array groupA is added to the final array
// //var final = [3, groupA];
// //var final = [3, ...groupA];
//
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);


var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greet (name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}
greet(...person);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];

final.forEach(function (name) {
  console.log('Hi ' + name);
});
