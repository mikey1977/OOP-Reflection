//Create 3 classes

//GroupUser inherits from User

//SuperUser inherits from GroupUser

//create methods on the prototypes of each class

var GroupUser = require('./GroupUser.js');

function SuperUser(name, age, eating) {
  GroupUser.call(this, name, age);
  this._eating = eating;

}
SuperUser.prototype.eating = function() {
  console.log('eating');
  return this._eating;

};
SuperUser.prototype = Object.create(GroupUser.prototype, {
  constructor : {
    value : SuperUser
  }
});

module.exports = SuperUser;