//Create 3 classes

//GroupUser inherits from User

//SuperUser inherits from GroupUser

//create methods on the prototypes of each class

var User = require('./User.js');

function GroupUser(name, age, beerDrinking, sleeping, programming) {
  this.name = name;
  User.call(this, name, age, beerDrinking, sleeping, programming);
}

GroupUser.prototytpe = Object.create(User.prototype, {
  constructor : {
    value : User,
    name : this.name
  }
});