let date = new Date();
let year = date.getFullYear();

document.querySelector('.year').textContent = year;
console.log(year);

let currentDate = document.lastModified;

document.querySelector('.updated').textContent = currentDate;
console.log(date);