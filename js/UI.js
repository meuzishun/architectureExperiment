export const UI = (function () {
  const createModalContainer = function () {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    return modal;
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

  const renderNewPersonForm = function () {};

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

  const renderNewProgrammerForm = function () {
    const modal = createModalContainer();
    const popup = createPopup();
    const form = createNewProgrammerForm();

    popup.appendChild(form);
    modal.appendChild(popup);
    document.body.appendChild(modal);
  };

  return {
    renderNewProgrammerForm,
  };
})();
