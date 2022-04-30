const colorElement = document.getElementById('color')
const codeElement = document.getElementById('code')
const generateButton = document.getElementById('generate-button')

const generateColor = () => {
    const patterns = '0123456789abcdefg' 
    let newColor = '#'

    for (let index = 0; index < 6 ; index++) {
        const random = Math.floor((Math.random() * 16))
        console.log(random)
        newColor = newColor + patterns[random]
        console.log(newColor)
    }

    color.style.backgroundColor = newColor
    codeElement.innerHTML = newColor
}

generateButton.addEventListener('click', generateColor)