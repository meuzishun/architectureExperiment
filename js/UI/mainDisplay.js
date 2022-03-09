import { state } from '../state.js';
import { forms } from './forms.js';

export const mainDisplay = (function () {
  const createMainDisplay = function () {
    const mainDisplay = document.createElement('div');
    mainDisplay.classList.add('main-display');
    return mainDisplay;
  };

  const handleBtnClick = function (e) {
    const value = e.currentTarget.dataset.value;
    const callBackLookup = {
      people: forms.renderNewPersonForm,
      programmers: forms.renderNewProgrammerForm,
    };
    callBackLookup[value]();
  };

  const createDisplayHeader = function (text) {
    const header = document.createElement('header');
    const heading = document.createElement('h2');
    const btn = document.createElement('button');

    header.classList.add('display-header');
    heading.classList.add('display-heading');
    heading.textContent = `${text}`;
    btn.dataset.value = text;
    btn.textContent = `add ${text}`;
    btn.addEventListener('click', handleBtnClick);

    header.appendChild(heading);
    header.appendChild(btn);
    return header;
  };

  const createPersonContainer = function (person) {
    const personContainer = document.createElement('div');
    const personName = document.createElement('h3');
    const personAge = document.createElement('p');

    personContainer.classList.add('person-container');
    personName.classList.add('person-name');
    personAge.classList.add('person-age');

    personName.textContent = `name: ${person.getFullName()}`;
    personAge.textContent = `age: ${person.getAge()}`;

    personContainer.appendChild(personName);
    personContainer.appendChild(personAge);
    return personContainer;
  };

  const createProgrammerContainer = function (programmer) {
    const programmerContainer = document.createElement('div');
    const programmerName = document.createElement('h3');
    const programmerAge = document.createElement('p');
    const programmerLanguageHeader = document.createElement('p');
    const programmerLanguages = document.createElement('ul');
    const programmerExperience = document.createElement('p');

    programmerContainer.classList.add('programmer-container');
    programmerName.classList.add('programmer-name');
    programmerAge.classList.add('programmer-age');
    programmerLanguageHeader.classList.add('programmer-languages-header');
    programmerLanguages.classList.add('programmer-languages');
    programmerExperience.classList.add('programmer-experience');

    programmerName.textContent = `name: ${programmer.getFullName()}`;
    programmerAge.textContent = `age: ${programmer.getAge()}`;
    programmerLanguageHeader.textContent = 'languages:';
    // programmerLanguages.textContent = `${programmer.getLanguages().join(', ')}`;
    programmer.getLanguages().forEach((language) => {
      const item = document.createElement('li');
      item.textContent = language;
      programmerLanguages.appendChild(item);
    });
    programmerExperience.textContent = `years active: ${programmer.getExperience()}`;

    programmerContainer.appendChild(programmerName);
    programmerContainer.appendChild(programmerAge);
    programmerContainer.appendChild(programmerLanguageHeader);
    programmerContainer.appendChild(programmerLanguages);
    programmerContainer.appendChild(programmerExperience);
    return programmerContainer;
  };

  const createPeopleDisplay = function () {
    const peopleDisplay = document.createElement('div');
    peopleDisplay.classList.add('display');
    peopleDisplay.classList.add('people-display');

    const header = createDisplayHeader('people');
    peopleDisplay.appendChild(header);
    return peopleDisplay;
  };

  const createProgrammersDisplay = function () {
    const programmersDisplay = document.createElement('div');
    programmersDisplay.classList.add('display');
    programmersDisplay.classList.add('programmers-display');

    const header = createDisplayHeader('programmers');
    programmersDisplay.appendChild(header);
    return programmersDisplay;
  };

  const renderPeopleDisplay = function () {
    const peopleDisplay = document.querySelector('.people-display');
    [...peopleDisplay.querySelectorAll('.person-container')].forEach(
      (container) => {
        peopleDisplay.removeChild(container);
      }
    );
    const people = state.getPeople();
    people.forEach((person) => {
      const personContainer = createPersonContainer(person);
      peopleDisplay.appendChild(personContainer);
    });
  };

  const renderProgrammersDisplay = function () {
    const programmersDisplay = document.querySelector('.programmers-display');
    [...programmersDisplay.querySelectorAll('.programmer-container')].forEach(
      (container) => {
        programmersDisplay.removeChild(container);
      }
    );
    const programmers = state.getProgrammers();
    programmers.forEach((programmer) => {
      const programmerContainer = createProgrammerContainer(programmer);
      programmersDisplay.appendChild(programmerContainer);
    });
  };

  const renderMainDisplay = function () {
    const mainDisplay = createMainDisplay();
    const peopleDisplay = createPeopleDisplay();
    const programmersDisplay = createProgrammersDisplay();

    mainDisplay.appendChild(peopleDisplay);
    mainDisplay.appendChild(programmersDisplay);
    document.body.appendChild(mainDisplay);
  };
  return {
    renderMainDisplay,
    renderPeopleDisplay,
    renderProgrammersDisplay,
  };
})();
