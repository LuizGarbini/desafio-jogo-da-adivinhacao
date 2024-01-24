//Variáveis
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');

const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');

let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// Eventos
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', enterClick);

function enterClick(event) {
  if (event.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick();
  }
}

// Função callback
function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector('#inputNumber');

  if (Number(inputNumber.value) <= 0 || Number(inputNumber.value) > 10) {
    alert('Digite um número entre 1 e 10');
    inputNumber.value = '';
  }

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();

    screen2.querySelector(
      'h2'
    ).innerText = `Acertou em ${xAttempts} tentativas`;
  }

  inputNumber.value = '';
  xAttempts++;
}

function handleResetClick() {
  toggleScreen();
  randomNumber = Math.round(Math.random() * 10);
  xAttempts = 1;
}

function toggleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}
