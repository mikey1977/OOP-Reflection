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

User.prototype.beerDrinking = function() {
  return this._beerDrinking;
};

User.prototype.sleeping = function() {
  return this._sleeping;
};

User.prototype.programming = function() {
  return this._programming;
};
