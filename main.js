const screenOne = document.querySelector('.screen1')
const screenTwo = document.querySelector('.screen2')
const screenTwoTitle = document.querySelector('.screen2 h2')

const buttonAttempts = document.querySelector('#buttonAttempts')
const buttonPlayAgain = document.querySelector('#buttonPlayAgain')

let valueSelected = document.querySelector('#valueNumber')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1;

console.log(randomNumber);

buttonAttempts.addEventListener('click', handleTryClick)
buttonPlayAgain.addEventListener('click', toggleScreen)

function handleTryClick (event) {
  event.preventDefault(); 
  const inputValue = Number(valueSelected.value)

  validateInfo(inputValue)
}

function validateInfo(inputValue) {
  if(inputValue === randomNumber) {
    screenOne.classList.add('hide')
    screenTwo.classList.remove('hide')

    screenTwoTitle.innerText = xAttempts > 1 ? `Acertou em ${xAttempts} vezes` : `Acertou em uma ${xAttempts} vez`
  }

  xAttempts++
}

function handleReset() {
    valueSelected.value = ''
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
    console.log(randomNumber);
  // location.reload()
}

function toggleScreen(event) {
  event.preventDefault()
  screenOne.classList.remove('hide')
  screenTwo.classList.add('hide')
  handleReset()
}