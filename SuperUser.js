//Create 3 classes

//GroupUser inherits from User

//SuperUser inherits from GroupUser

//create methods on the prototypes of each class

var GroupUser = require('./GroupUser.js');

function SuperUser(name, age, eating) {
  GroupUser.call(this, name, age);
  this._eating = eating;
  // this._name = name;
  // this._age = age;
  // GroupUser.call(this, 'rolf', 55);

}
SuperUser.prototype.eating = function() {
  console.log('eating');
  return this._eating;

  // return this._age;
};
SuperUser.prototype = Object.create(GroupUser.prototype, {
  constructor : {
    value : SuperUser
  }
});
// var Super = new SuperUser('dude', 99, true, true, true);

// console.log(Super);
// var theSuper = new SuperUser('Mike', 50, true, true, false);
// console.log(SuperUser);

module.exports = SuperUser;