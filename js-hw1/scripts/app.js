const displayElement = document.getElementById('calculator-display')
count = 0;

const buttonPressed = (character) => {
    displayElement.value = displayElement.value + character
    
    if (count == -1) {
    displayElement.value = null}
    count = 1
    console.log("count"+count)
    console.log(displayElement.value)

}

const compute = () => {
    displayElement.value = eval(displayElement.value)
    count = -1;
}


const clearDisplay = () => {
    
    // displayElement.value = null       .......(myself)
    
    displayElement.value = ''

}

const deleteLastCharacter = () => {

    // displayElement.value = displayElement.value.slice(0,-1)     .....(self)

    displayElement.value = displayElement.value.slice(0, displayElement.value.length -1)

}