
const containerTime = document.getElementById('container-Time')
let city = 'Madrid'
const apiKey = '6eed3220b1cc4ec29ba192021241607'
const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`

    const getTime = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            return data
        } catch(error) {
        console.log('Este es el error', error)
    }
}

getTime().then(city => {
    const {current, forecast, location} = city
//console.log(city)
const dataHour = forecast.forecastday[0].hour
let hoursData = '';
dataHour.forEach(hour => {
    const horaSola = hour.time.split(' ')[1]
    hoursData += `<div class="time-Hour">${horaSola} <img src=${hour.condition.icon} alt="icon"/> <p class="yellow">${hour.temp_c}°C</p></div>`;
});
    containerTime.innerHTML = `<div class="container-city"><h2>${location.name} / ${location.country} </h2> <p class="yellow">${current.condition.text} </p> 
    <div class="divTemp"><img src=${current.condition.icon} alt="icon" class="iconBig"/> 
    <div class="temp">
    <p class="tempNum">${current.temp_c}</p>
    <img src="../assets/imgIcon/celsius.png" alt="Celsius" class="celsius"/>
    </div>
    <div class="temp2">
    <p>Precipitaciones: ${current.precip_in}% </p>
    <p>Humedad: ${current.humidity}% </p>
    <p>Viento: ${current.wind_kph}Km/h </p>
    </div>
    </div>
    <div class="time-Hours">${hoursData}</div>
    `
})




//current.condition.icon / text "Sunny" / wind_kph
//forecast . forecastday .0 . hour
//location . country . name ó region