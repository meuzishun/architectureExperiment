export class Person {
  #firstName;
  #lastName;
  #age;

  constructor(firstName, lastName, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }

  getFirstName() {
    return this.#firstName;
  }

  getLastName() {
    return this.#lastName;
  }

  getAge() {
    return this.#age;
  }

  getFullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  ageOneYear() {
    this.#age++;
  }
}
