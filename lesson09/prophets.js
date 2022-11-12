// ASYNC AWAIT fetch

const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

// await can only be used with an async function
async function getProphets(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);
        const prophets = jsObject['prophets'];
        console.log(prophets[0].lastname);
        prophets.forEach(displayProphets);
    }
    
};

getProphets(requestURL);

function displayProphets(item) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let dob = document.createElement('p');
    let pob = document.createElement('p');


    h2.textContent = `${item.name} ${item.lastname} `
    dob.textContent = `Date of Birth: ${item.birthdate}`;
    pob.textContent = `Birthplace: ${item.birthplace}`;
    img.setAttribute('src', item.imageurl);
    img.setAttribute('alt', item.name + ' ' + item.lastname);

    card.appendChild(h2);
    card.appendChild(dob);
    card.appendChild(pob);
    card.appendChild(img);

    document.querySelector('.cards').appendChild(card);

    // card.forEach((item) => {
    //     item.remove();
    // });

}

// Hides cards (target the div using the class/id)
    // card.style.display = 'none';

