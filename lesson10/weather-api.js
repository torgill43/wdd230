const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=e6f954163934644be8ce65af59e78b53";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
    let tempK = jsObject.main.temp
    let tempF = ((tempK - 273.15) * 1.8000 + 32).toFixed(2);
    document.querySelector('#current-temp').textContent = tempF;
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
  };
getWeather();