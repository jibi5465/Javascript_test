const displayElement = document.getElementById('calculator-display')

const buttonPressed = (character) => {
    displayElement.value = displayElement.value + character

}