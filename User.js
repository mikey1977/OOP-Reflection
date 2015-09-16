//Create 3 classes

//GroupUser inherits from User

//SuperUser inherits from GroupUser

//create methods on the prototypes of each class

function User(name, age, beerDrinking, sleeping, programming) {
  this._name = name;
  this._age = age;
  this._beerDrinking = beerDrinking;
  this._sleeping = sleeping;
  this._programming = programming;

}
User.prototype.name = function() {
  return this._name;
};

User.prototype.age = function() {
  return this._age;
};

User.prototype.beerDrinking = function() {
  console.log('beer');
  return this._beerDrinking;
};

User.prototype.sleeping = function() {
  console.log('sleep');
  return this._sleeping;
};

User.prototype.programming = function() {
  console.log('confusion');
  return this._programming;
};

module.exports = User;