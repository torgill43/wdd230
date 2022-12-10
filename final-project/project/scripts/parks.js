const requestURL = "https://raw.githubusercontent.com/torgill43/wdd230/main/final-project/project/json/parks.json";

async function getParkData(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();
        const parks = jsObject['parks'];
        console.log(parks);
        parks.forEach(displayParkInfo);
    }
}

async function displayParkInfo(item) {
    let section = document.createElement('section');
    let name = document.createElement('h2');
    let location = document.createElement('h3')
    let a = document.createElement('a')
    let description = document.createElement('p');

    name.textContent = `${item.name}`
    location.textContent = `${item.city}, ${item.state}`
    a.setAttribute('href', item.websiteURL)
    a.textContent = "Link to Park Site"
    description.textContent = `${item.description}`

    section.appendChild(name);
    section.appendChild(location);
    section.appendChild(a);
    section.appendChild(description);

    document.querySelector('#park-info').appendChild(section);
}

getParkData(requestURL);