const iconElement = document.querySelector('.weather-icon')
const temperatureElement = document.querySelector('.temperature-value')
const descriptionElement = document.querySelector('.temperature-description')
const locationElement = document.querySelector('.location')
const notificationElement = document.querySelector('.notification')
const key = '82005d27a116c2880c8f0fcb866998a0'
// const KELVIN = 273

const weather = {
  city: '-',
  country: '-',
  iconId: 'unknown',
  description: '-',
  temperature: {
    unit: 'celsius',
    value: 0
  }
}

// const displayWeather = () => {
//   iconElement.innerHTML = `<img src="icons/${weather.iconId}.png">`
//   temperatureElement.innerHTML = `${weather.temperature.value}°<span>c</span>`
//   descriptionElement.innerHTML = weather.description
//   locationElement.innerHTML = `${weather.city},${weather.country}`
// }

const getWeather = async (latitude, longitude) => {
  const api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
  const data = await (await fetch(api)).json()
  console.log(data)

  weather.temperature.value = Math.floor(data.main.temp - 273)
  weather.description = data.weather[0].description
  weather.iconId = data.weather[0].icon
  weather.city = data.name
  weather.country = data.sys.country

  displayWeather()
}

const displayWeather = () => {
  iconElement.innerHTML = `<img src="icons/${weather.iconId}.png">`
  temperatureElement.innerHTML = `${weather.temperature.value}°C`
  descriptionElement.innerHTML = weather.description
  locationElement.innerHTML = `${weather.city},${weather.country}`
}

const setPosition = (position) => {
  const { latitude, longitude } = position.coords
  getWeather(latitude, longitude)
  console.log(getWeather(latitude, longitude))
}

const showError = (error) => {
  notificationElement.style.display = 'block'
  notificationElement.innerHTML = `<p>${error.message}</p>`
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(setPosition, showError)
} else{
  notificationElement.style.display = 'block'
  notificationElement.innerHTML = '<p>Error to access Geolocation</p>'
}

temperatureElement.addEventListener('click', () => {
  if(!weather.temperature.value) return

  if(weather.temperature.unit === 'celsius') {
    const fahrenheit = Math.floor((weather.temperature.value*9) / 5 +32)
    temperatureElement.innerHTML = `${fahrenheit}°F`
    weather.temperature.unit = 'fahrenheit'
  } else {
    temperatureElement.innerHTML = `${weather.temperature.value}°C`
    weather.temperature.unit = 'celsius'
  }
})


