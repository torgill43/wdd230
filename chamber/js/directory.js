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


// ASYNC AWAIT fetch

const requestURL = "https://raw.githubusercontent.com/torgill43/wdd230/main/chamber/data.json";

// await can only be used with an async function
async function getBusinesses(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);
        const businesses = jsObject['businesses'];
        console.log(businesses[0].name);
        businesses.forEach(displayBusinesses);
    }
    
};

getBusinesses(requestURL);

function displayBusinesses(item) {
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let site = document.createElement('a');


    logo.setAttribute('src', `https://raw.githubusercontent.com/torgill43/wdd230/main/chamber/data.json/${item.logo}`);
    logo.setAttribute('alt', `${item.name} Logo`);
    address.textContent = `${item.address} `
    phone.textContent = `${item.phone}`;
    site.textContent = `${item.websiteURL}`;

    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(site);

    document.querySelector('.cards').appendChild(card);    
}

// Hides cards (target the div using the class/id)
    // card.style.display = 'none';

    