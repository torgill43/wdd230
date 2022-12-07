// Responsive Dates
let date = new Date();
let year = date.getFullYear();

document.querySelector('.year').textContent = year;
console.log(year);

let currentDate = document.lastModified;

document.querySelector('.updated').textContent = currentDate;
console.log(date);

// Hamburger Menu
function toggleMenu() {
    document.querySelector('#primaryNav').classList.toggle("open");
    let iconTextX = 'X'
    let iconTextMenu = '&#9776;';
    let query = document.querySelector('#button-icon')
    if (query.textContent != iconTextX){
        query.textContent = iconTextX;
    } else {
        query.innerHTML = '<span>' + iconTextMenu + '</span>';
    }
}

const x = document.querySelector('#hamburger-button');

x.addEventListener('click', toggleMenu);