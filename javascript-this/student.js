/* exported student */
var student = {
  firstName: 'Nathan',
  lastName: 'Chon',
  subject: 'JavaScript',
  getFullName: function () {
    var fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  },
  getIntroduction: function () {
    var first = this.firstName;
    var last = this.lastName;
    var sub = this.subject;
    return ('Hello, my name is ' + first + ' ' + last + ' and I am studying ' + sub + '.');
  }
};
