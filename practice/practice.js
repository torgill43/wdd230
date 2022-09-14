// SEQUENCE

let date = new Date();

console.log(date);

let year = date.getFullYear();

console.log(year);

document.querySelector('h1').textContent = year;

let currentDate = document.lastModified;
// lastModified shows when the html doc was last saved

console.log(currentDate)

document.querySelector('div').textContent = currentDate;