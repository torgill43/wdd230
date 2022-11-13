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

let temp = document.querySelector('#temp').textContent;
let windspeed = document.querySelector('#wind-speed').textContent;

if (temp < 50 && windspeed > 4.8) {
let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));

const windchill = document.querySelector('#wind-chill');

windchill.innerHTML = chill + '&#8457;';
}


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

// const hiddenDate = 
//     date.getMonth() + ' / ' +
//     date.getDate() + ' / ' +
//     date.getFullYear() + ' / ' +
//     date.getHours() + ' / ' +
//     date.getMinutes() + ' / ' +
//     date.getSeconds()
// ;