const maxInput = document.getElementById('max-input')
const minInput = document.getElementById('min-input')
const resultText = document.getElementById('result-text')

const validate = () => {
  let max = maxInput.value
  let min = minInput.value

  if (!max) {
    max = 0
  }

  if (!min) {
    min = 0
  }

  if (max < min) {
    let temp = max
    max = min
    min = temp
  }

  if (min < 2) {
    min = 2
  }

  maxInput.value = max
  minInput.value = min

}

const findLargest = () => {

  const max = maxInput.value
  const min = minInput.value
  
  let index = max
  let prime = 0

  do {
    let loop = 2
    let limit = index
    let isPrime = true
      do {
        if (index % loop === 0) {
          isPrime = false;
          break
        }
        loop++;
      }while (loop < limit)

      if (isPrime) {
        prime = index
        break
      }
      index--

  }while (index >= min)

  if (prime !== 0) {
    resultText.innerHTML = prime
  }else {
    resultText.innerHTML = 'NO PRIME NUMBER'
  }
}

const findLowest = () => {
  // validate()

  const max = maxInput.value
  const min = minInput.value
  let prime = 0

  // recheck min value 
  if (min < 2) {
      let min = 2
      // console.log(min)
  
    for (let index = min; index < max; index++) {
      let isPrime = true
      // console.log(index)
    
      for (let nestIndex = 2; nestIndex < index; nestIndex++) {
      
        if (index % nestIndex === 0) {
          isPrime = false
          break
        }
      }
      
      if (isPrime) {
        prime = index
        break
      }
    }
  }else if (min > 2) {
    for (let index = min; index < max; index++) {
      let isPrime = true
      console.log(index)
      
      for (let nestIndex = 2; nestIndex < index; nestIndex++) {
      
        if (index % nestIndex === 0) {
          isPrime = false
          console.log(isPrime)
          break
        }
      }
      
      if (isPrime) {
        prime = index
        break
        console.log(prime)
      }
    }
  }  

// result 
  if (prime !== 0) {
    resultText.innerHTML = prime
  } else {
    resultText.innerHTML = 'NO PRIME NUMBER'
  }
}


