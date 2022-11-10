// SWAPI
// website url: https://open-meteo.com/en/docs#latitude=33.45&longitude=-112.07&hourly=temperature_2m,windspeed_10m&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FDenver

// Phoenix
const url = "https://api.open-meteo.com/v1/forecast?latitude=43.826069&longitude=-111.789528&hourly=temperature_2m,windspeed_10m&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FDenver"

// Bern
// const url = "https://api.open-meteo.com/v1/forecast?latitude=46.9480&longitude=7.4481&hourly=temperature_2m,windspeed_10m&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FDenver"

// Brasilia
// const url = "https://api.open-meteo.com/v1/forecast?latitude=-15.7801&longitude=-47.9292&hourly=temperature_2m,windspeed_10m&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FDenver"

let date = new Date()

let timeNow = date.getHours();
console.log(timeNow);

// timeNow = timeNow + 72

async function getWeather(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);

        const hourly = jsObject['hourly'];
        console.log(hourly);

        const tempNow = hourly.temperature_2m
        console.log(tempNow);

        const current_weather = jsObject['current_weather']
        
        console.log(tempNow[timeNow]);
        displayWeather(tempNow);
        document.querySelector('.weather2').textContent = current_weather.temperature;
     }
    
};

getWeather(url);

function displayWeather(item) {
    // let card = document.createElement('section');
    let h2 = document.createElement('h2');

    h2.textContent = item[timeNow];

    // card.appendChild(h2);
    document.querySelector('#city').textContent = "Rexburg";
    document.querySelector('.weather1').appendChild(h2);


}