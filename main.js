import { Person } from './js/modules/person.js';
import { Programmer } from './js/modules/programmer.js';

const andrew = new Person('Andrew', 'Smith', 40);

const morgan = new Programmer(
  'Morgan',
  'Hodges',
  38,
  ['JavaScript', 'Node', 'PHP', 'Python'],
  15
);

console.log(morgan.getLanguages());
morgan.addLanguage('HTML');
console.log(morgan.getLanguages());

console.log(morgan.getAge());
morgan.ageOneYear();
console.log(morgan.getAge());
