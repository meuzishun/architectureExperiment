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

  const addPersonToDisplay = function (person) {};
  const addProgrammerToDisplay = function (programmer) {};

  const renderPeopleDisplay = function () {};
  const renderProgrammersDisplay = function () {};
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
  };
})();
