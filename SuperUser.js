function SuperUser(name) {
  this.name = name;
  GroupUser.call(this);
}


SuperUser.prototype = Object.create(GroupUser.prototype, {
  constructor: {
    name : this.name
  }
});