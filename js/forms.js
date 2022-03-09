import { state } from './state.js';

export const forms = (function () {
  const createModalContainer = function () {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    return modal;
  };

  const removeEntireModal = function (form) {
    document.body.removeChild(form.parentElement.parentElement);
  };

  const createPopup = function () {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    return popup;
  };

  const createFormItem = function (inputType, displayText, name) {
    const label = document.createElement('label');
    const input = document.createElement('input');

    label.setAttribute('for', name);
    label.textContent = displayText;
    input.setAttribute('type', inputType);
    input.setAttribute('name', name);
    input.setAttribute('id', name);

    label.appendChild(input);
    return label;
  };

  const createNewPersonForm = function () {
    const form = document.createElement('form');
    const heading = document.createElement('h2');
    const firstNameInput = createFormItem('text', 'first name:', 'first-name');
    const lastNameInput = createFormItem('text', 'last name:', 'last-name');
    const ageInput = createFormItem('number', 'age:', 'age');
    const submitBtn = document.createElement('input');

    form.classList.add('form');
    form.classList.add('new-person-form');
    heading.classList.add('new-person-form-heading');
    heading.textContent = 'add new person';
    submitBtn.setAttribute('type', 'submit');
    submitBtn.setAttribute('value', 'Add Person');

    form.appendChild(heading);
    form.appendChild(firstNameInput);
    form.appendChild(lastNameInput);
    form.appendChild(ageInput);
    form.appendChild(submitBtn);

    return form;
  };

  const createNewProgrammerForm = function () {
    const form = document.createElement('form');
    const heading = document.createElement('h2');
    const firstNameInput = createFormItem('text', 'first name:', 'first-name');
    const lastNameInput = createFormItem('text', 'last name:', 'last-name');
    const ageInput = createFormItem('number', 'age:', 'age');
    const languagesInput = createFormItem('text', 'languages:', 'languages');
    const experienceInput = createFormItem('text', 'experience:', 'experience');
    const submitBtn = document.createElement('input');

    form.classList.add('form');
    form.classList.add('new-programmer-form');
    heading.classList.add('new-programmer-form-heading');
    heading.textContent = 'add new programmer';
    submitBtn.setAttribute('type', 'submit');
    submitBtn.setAttribute('value', 'Add Programmer');

    form.appendChild(heading);
    form.appendChild(firstNameInput);
    form.appendChild(lastNameInput);
    form.appendChild(ageInput);
    form.appendChild(languagesInput);
    form.appendChild(experienceInput);
    form.appendChild(submitBtn);

    return form;
  };

  const handlePersonFormSubmission = function (e) {
    e.preventDefault();
    const form = e.srcElement;
    const inputs = [...form].filter((input) => input.type !== 'submit');
    const values = inputs.map((input) => input.value);
    state.addPerson(values);
    removeEntireModal(form);
    console.log(state.getPeople());
  };

  const handleProgrammerFormSubmission = function (e) {
    e.preventDefault();
    const form = e.srcElement;
    const inputs = [...form].filter((input) => input.type !== 'submit');
    const values = inputs.map((input) => input.value);
    state.addProgrammer(values);
    removeEntireModal(form);
    console.log(state.getProgrammers());
  };

  const renderNewPersonForm = function () {
    const modal = createModalContainer();
    const popup = createPopup();
    const form = createNewPersonForm();
    form.addEventListener('submit', handlePersonFormSubmission);

    popup.appendChild(form);
    modal.appendChild(popup);
    document.body.appendChild(modal);
  };

  const renderNewProgrammerForm = function () {
    const modal = createModalContainer();
    const popup = createPopup();
    const form = createNewProgrammerForm();
    form.addEventListener('submit', handleProgrammerFormSubmission);

    popup.appendChild(form);
    modal.appendChild(popup);
    document.body.appendChild(modal);
  };

  return {
    renderNewPersonForm,
    renderNewProgrammerForm,
  };
})();
