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

// Hidden date
const hiddenDate = 
    date.getMonth() + ' / ' +
    date.getDate() + ' / ' +
    date.getFullYear() + ' / ' +
    date.getHours() + ' / ' +
    date.getMinutes() + ' / ' +
    date.getSeconds()
;

document.querySelector('#hidden-date').textContent = hiddenDate;