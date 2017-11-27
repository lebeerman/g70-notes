// classroom.js
class Classroom {
  constructor(numberOfStudents) {
    this.numberOfStudents = numberOfStudents;
  }

  addStudents(num) {
    if (num < 0) return;
    this.numberOfStudents += num;
  }

  removeStudents(num) {
    if (num < 0) return;
    this.numberOfStudents -= num;
  }
}

module.exports = Classroom;

