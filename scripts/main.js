let date = new Date();
let year = date.getFullYear();

document.querySelector('.year').textContent = year;

let currentDate = document.lastModified;

document.querySelector('.updated').textContent = currentDate;