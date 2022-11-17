// Responsive Dates
const date_now = new Date();
console.log(date_now);

const full_date = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(date_now);
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
async function getData(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();
        // console.log(jsObject);
        const businesses = jsObject['businesses'];
        // console.log(businesses[0].name);
        // businesses.forEach(displayCards);
        return businesses;
    }
};

async function displayCards() {
    // document.querySelector('.cards').style.display = 'none';
    // document.querySelector('table').style.display = 'none';

    let business = await getData(requestURL);
    // console.log(business);
    business.forEach(displayBusinessesCards);

    function displayBusinessesCards(item) {
        let cards = document.querySelector('.cards');

        let card = document.createElement('section');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let site = document.createElement('a');

        logo.setAttribute('src', `https://raw.githubusercontent.com/torgill43/wdd230/main/chamber/images/${item.logo}`);
        logo.setAttribute('alt', `${item.name} Logo`);
        address.textContent = `${item.address} `
        phone.textContent = `${item.phone}`;
        site.setAttribute('href', item.websiteURL);
        site.textContent = item.websiteURL;

        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(site);

        document.querySelector('.cards').appendChild(card);
    }
}

async function displayTable() {

    let business = await getData(requestURL);
    console.log(business);
    business.forEach(displayBusinessTable);

    function displayBusinessTable(item) {

        let row = document.createElement('tr');
        let name = document.createElement('td');
        let address = document.createElement('td');
        let phone = document.createElement('td');
        let site = document.createElement('td');

        name.textContent = `${item.name}`;
        address.textContent = `${item.address}`;
        phone.textContent = `${item.phone}`;
        site.setAttribute('href', item.websiteURL);
        site.textContent = item.websiteURL;

        row.appendChild(name);
        row.appendChild(address);
        row.appendChild(phone);
        row.appendChild(site);

        document.querySelector('table').appendChild(row);
    }
}

function toggleCard() {
    document.querySelector('table').style.display = 'none';
    // document.querySelector('.cards').style.display = 'flex';

    document.querySelector('.cards').classList.toggle("show-cards");
}

document.querySelector('#grid-btn').addEventListener('click', toggleCard);

function toggleTable() {
    // document.querySelector('table').style.display = 'table-cell';
    document.querySelector('.cards').style.display = 'none';

    document.querySelector('table').classList.toggle("show-table");
}

document.querySelector('#table-btn').addEventListener('click', toggleTable);

getData(requestURL);
displayCards();
displayTable();
// document.querySelector('#table-btn').addEventListener('click', displayTable);
// document.querySelector('#grid-btn').addEventListener('click', displayCards);