const displayElement = document.getElementById('calculator-display')


const buttonPressed = (character) => {
    displayElement.value = displayElement.value + character
}

const compute = () => {
    displayElement.value = eval(displayElement.value)
}

const clearDisplay = () => {
    
}

const deleteLastCharacter = () => {

}