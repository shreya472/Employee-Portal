class User {
  constructor(obj) {
    this.userid = Number(obj.userid);
    this.name = obj.name;
    this.email = obj.email;
    this.address = obj.address;
    this.doj = obj.doj;
  }
}
module.exports = User;
