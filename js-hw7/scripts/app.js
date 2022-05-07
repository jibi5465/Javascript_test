const inputName = document.getElementById('input-name')
const characterName = document.getElementById('character-name')
const characterType = document.getElementById('character-type')
const characterImage = document.getElementById('character-image')
const findBtn = document.getElementById('find-btn')

findBtn.addEventListener('click', async () => {

  try {
    const input = inputName.value
    const url = `https://rickandmortyapi.com/api/character/?page=2&name=${input}&status=alive`
    const response = await(await fetch(url)).json()

    if (!response.results){
      throw { message: `${input} not found` }
    }

    if (!response.results?.length) {
      throw { message: `${input} not found`}
    }

    // console.log(response.results[0])

    const character = response.results[0]

    characterName.innerHTML = character.name
    characterImage.src = character.image
    characterType.innerHTML = character.species

  }catch (error) {
    window.alert(`[ERROR] => ${error.message}`)
  } finally {
    inputName.value = ''
  }


})
