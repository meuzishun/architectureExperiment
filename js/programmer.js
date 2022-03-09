import { Person } from './person.js';

export class Programmer extends Person {
  #languages;
  #experience;

  constructor(firstName, lastName, age, languages, experience) {
    super(firstName, lastName, age);
    this.#languages = languages;
    this.#experience = experience;
  }

  getLanguages() {
    return this.#languages;
  }

  getExperience() {
    return this.#experience;
  }

  addLanguage(language) {
    this.#languages.push(language);
  }

  addExperience() {
    this.#experience++;
  }
}
