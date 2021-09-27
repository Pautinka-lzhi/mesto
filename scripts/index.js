let formElement = document.querySelector('.popup__form');
let profilEdit = document.querySelector('.profil__edit');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
let nameInput = popup.querySelector('.popup__input_form_name');
let descriptionInput = popup.querySelector('.popup__input_form_description');
let profilName = document.querySelector('.profil__name');
let profilDescription = document.querySelector('.profil__description');
let gridButton = document.querySelector('.grid__button');

gridButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('grid__button_actived')
});

function formSubmitHandler(evt) {
    evt.preventDefault();
    setProfileValue();
    closePopup(popup);
};

function setProfileValue() {
    profilName.textContent = nameInput.value;
    profilDescription.textContent = descriptionInput.value
};

function showPopup(evt) {
    popup.classList.add('popup__opened');
};

function closePopup(evt) {
    popup.classList.remove('popup__opened');
};

formElement.addEventListener('submit', formSubmitHandler);
profilEdit.addEventListener('click', showPopup);
popupClose.addEventListener('click', closePopup);