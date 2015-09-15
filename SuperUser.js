//Create 3 classes

//GroupUser inherits from User

//SuperUser inherits from GroupUser

//create methods on the prototypes of each class

var GroupUser = require('./GroupUser.js');

function SuperUser(name, age, beerDrinking, sleeping, programming) {
  this.name = name;
  GroupUser.call(this, name, age, beerDrinking, sleeping, programming);
}

SuperUser.prototype = Object.create(GroupUser.prototype, {
  constructor : {
    value : GroupUser,
    name : this.name
  }
});