// test/classroom_test.js

var Classroom = require('../classroom');
var expect = require('chai').expect;

describe('Classroom', () => {
  describe('addStudents', () => {
    it('increases the numberOfStudents when given a positive integer', () => {
      var classroom = new Classroom(10);
      classroom.addStudents(10);
      expect(classroom.numberOfStudents).to.equal(20);
    });

    it('does nothing to the numberOfStudents when given a negative integer', () => {
      var classroom = new Classroom(10);
      classroom.addStudents(-10);
      expect(classroom.numberOfStudents).to.equal(10);
    });
  });

  describe('removeStudents', () => {
    it('decreases the numberOfStudents when given a positive integer', () => {
      var classroom = new Classroom(10);
      classroom.removeStudents(10);
      expect(classroom.numberOfStudents).to.equal(0);
    });

    it('does nothing to the numberOfStudents when given a negative integer', () => {
      var classroom = new Classroom(10);
      classroom.removeStudents(-10);
      expect(classroom.numberOfStudents).to.equal(10);
    });
  });
});
