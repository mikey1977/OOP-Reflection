//Create 3 classes

//GroupUser inherits from User

//SuperUser inherits from GroupUser

//create methods on the prototypes of each class

var User = require('./User.js');

function GroupUser(name, age, pooping) {
  User.call(this, name, age);
  this._pooping = pooping;

}

GroupUser.prototype.pooping = function() {
  console.log('stinky');
  return this._pooping;
};

GroupUser.prototype = Object.create(User.prototype, {
  constructor : {
    value : GroupUser
  }
});

module.exports = GroupUser;