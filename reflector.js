// Write a function called reflector that takes in an instance of an object
//  and use console.log() to print out the name of the current class,
//  and the methods and properties that belong to only that class.

//Use Object.getPrototypeOf()

var User = require('./User.js');
var GroupUser = require('./GroupUser.js');
var SuperUser = require('./SuperUser.js');

function reflector(object) {
  //Magically do something
  console.log(Object.getPrototypeOf(object));
}
