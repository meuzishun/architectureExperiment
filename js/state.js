import { Person } from './modules/person.js';
import { Programmer } from './modules/programmer.js';

export const state = (function () {
  const people = [];
  const programmers = [];

  const addPerson = function (data) {
    people.push(new Person(...data));
  };

  const addProgrammer = function (data) {
    programmers.push(new Programmer(...data));
  };

  const getPeople = function () {
    return people;
  };

  const getProgrammers = function () {
    return programmers;
  };

  return {
    addPerson,
    addProgrammer,
    getPeople,
    getProgrammers,
  };
})();
