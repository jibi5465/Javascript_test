const addButton = document.getElementById('enter')
const userInput = document.getElementById('userInput')
const ul = document.querySelector('ul')
const toDos = []

const addInput = (input) => {
    if (input) {
    toDos.push(input)
    }
    // console.log(userInput.value)
}

const createList = () => {

    addInput(userInput.value)

    while(ul.firstChild) {
        ul.removeChild(ul.lastChild)
    }

    toDos.forEach((toDos) => {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(toDos))
        ul.appendChild(li)

        userInput.value = ''
        
        const doneTask = () => {
            li.classList.toggle('done')
        }

        li.addEventListener('click', doneTask)

        const deleteBtn = document.createElement('button')
        deleteBtn.appendChild(document.createTextNode('Delete'))
        li.appendChild(deleteBtn)

        deleteBtn.addEventListener('click', () => {
            li.classList.add('delete')
        })
    })


}

addButton.addEventListener('click', createList)

