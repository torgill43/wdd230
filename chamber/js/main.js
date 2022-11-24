// Responsive Dates
const date_now = new Date();
console.log(date_now);

const full_date = new Intl.DateTimeFormat ('en-US', {dateStyle: 'full'}).format(date_now);
console.log(full_date);
document.querySelector('.current-date').textContent = full_date;

let year = date_now.getFullYear();
document.querySelector('#year').textContent = year;

let currentDate = document.lastModified;
document.querySelector('#updated').textContent = currentDate;

let weekDay = date_now.getDay();
// weekDay = 2;
console.log(weekDay);

// Hamburger Menu
function toggleMenu() {
    document.querySelector('#primaryNav').classList.toggle("open");
}

const x = document.querySelector('#hamburger-button');

x.addEventListener('click', toggleMenu);

// Monday & Tuesday Message
function toggleMessage() {
    document.querySelector('#announcement').classList.toggle("show");
    document.querySelector('#announcement').style.display = "block";
    console.log('It works!')
}

if (weekDay == 1 || weekDay == 2) {
    toggleMessage()
}

// Wind Chill

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5596475&appid=e6f954163934644be8ce65af59e78b53";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);

    // Temp
    let tempK = jsObject.main.temp
    let tempF = ((tempK - 273.15) * 1.8000 + 32).toFixed(0);
    document.querySelector('#temp').textContent = tempF;

    // Wind
    let speedMeters = jsObject.wind.speed;
    let speed = (speedMeters * 2.237).toFixed(1);
    
    // Icon
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    let weatherIcon = jsObject.weather[0]
    document.querySelector('#weather-icon').textContent = iconsrc;
    document.querySelector('#weather-icon').setAttribute('src', iconsrc);
    document.querySelector('#weather-icon').setAttribute('alt', "weather icon");
    
    // Description
    let desc = jsObject.weather[0].description;
    let descArr = desc.split(" ");
    for (var i = 0; i < descArr.length; i++)
        descArr[i] = descArr[i].charAt(0).toUpperCase() + descArr[i].slice(1);
    let descCapital = descArr.join(" ");
    document.querySelector('#desc').textContent = descCapital;
    
    if (tempF < 50 && speed > 4.8) {
        let chill = Math.round((35.74 + (0.6215 * tempF))-(35.75 * Math.pow(speed,0.16)) + (0.4275*tempF*Math.pow(speed,0.16)));
        
        const windchill = document.querySelector('#wind-chill');
        
        windchill.innerHTML = chill + '&#8457;';
    }
    document.querySelector('#wind-speed').textContent = speed;
  };
getWeather();

// let temp = document.querySelector('#temp').textContent;
// let windspeed = document.querySelector('#wind-speed').textContent;




// -------------------- Discovery Page ---------------------

// Lazy Load

// const image = document.querySelectorAll(".discover-img");
// console.log(image);

// const pimages = document.querySelectorAll('[data-src]');
// const options = {
//     threshold: .5
// }

// function preloadImage(img) {
//     const source = img.getAttribute('data-src');
//     if (!source){
//         return;
//     }

//     img.src = source;
// }

// const io = new IntersectionObserver (
//     (entries, io) => {
//         entries.forEach(entry =>
//             {
//                 if (!entry.isIntersecting) {
//                     return;
//                 } else {
//                     preloadImage(entry.target);
//                     io.unobserve(entry.target);
//                 }
//             })
// },
// options);

// pimages.forEach(image => {
//     io.observe(image);
// })

// // Last Visited

// let lastVisitDate;

// let thisVisitDate = Date.now();

// if (!localStorage.getItem('lastVisit')) {
//     localStorage.setItem('lastVisit', Date.now());
//     document.querySelector('#discover-last-visit').textContent = "This is your first visit!";
// } else {
//     setDate();
// }

// function setDate() {
//     let lastVisitDate = localStorage.getItem('lastVisit');
//     let thisVisitDate = Date.now();

//     let diff = thisVisitDate - lastVisitDate;
//     console.log(diff);
//     let daysDiff = Math.floor(diff/1000/60/60/24);

//     document.querySelector('#last-visit').textContent = daysDiff;
//     localStorage.setItem('lastVisit', Date.now());
// }
                                    
// -------------------- Join Page ---------------------

