const hideInputError = (formElement, inputElement, {inputErrorClass, errorClass}) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';

};

const showInputError = (formElement, inputElement, errorMessage, {inputErrorClass, errorClass}) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

const checkInputValidity = (formElement, inputElement, {inputErrorClass, errorClass}) => {
  if(inputElement.validity.valid) {
    hideInputError(formElement, inputElement, {inputErrorClass, errorClass});
  } else {
    showInputError(formElement, inputElement, inputElement.validationMessage, {inputErrorClass, errorClass});
  }
};

const toggleButtonState = (formElement, buttonElement, inactiveButtonClass) => {
  const isFormValid = formElement.checkValidity();
  buttonElement.disabled = !isFormValid;
  buttonElement.classList.toggle(inactiveButtonClass, !isFormValid);
};

const setEventListeners = (formElement, {inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) => {
  formElement.addEventListener('submit', evt => evt.preventDefault());
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  toggleButtonState(formElement, buttonElement, inactiveButtonClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, {inputErrorClass, errorClass});
      toggleButtonState(formElement, buttonElement, inactiveButtonClass);

    });

  });
};

const enableValidation = (config) => {
  const {
    formSelector, 
    inputSelector, 
    submitButtonSelector,
    inactiveButtonClass,
    inputErrorClass,
    errorClass
  } = config;
  const forms = document.querySelectorAll(formSelector);
  forms.forEach(form => {
    const newObgect = {inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}
    setEventListeners(form, newObgect);
  });
};
