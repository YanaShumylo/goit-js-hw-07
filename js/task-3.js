const inputNameElem = document.querySelector('#name-input');

const spanNameElem = document.querySelector('#name-output');

inputNameElem.addEventListener('input', handleNameInput);

function handleNameInput(event) {
    const nameValue = event.currentTarget.value.trim();
  spanNameElem.textContent = nameValue === '' ? 'Anonymous' : nameValue;
};