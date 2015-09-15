function GroupUser(name) {
  this.name = name;
  User.call(this);
}

GroupUser.prototytpe = Object.create(User.prototype, {
  constructor: {
    name: this.name
  }
});