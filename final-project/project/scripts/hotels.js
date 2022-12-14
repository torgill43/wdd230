// CAVE SLIDESHOW -------------------------------------------->
let caveSlideIndex = 1;
showCaveSlides(caveSlideIndex);

// Next/previous controls
function plusCaveSlides(n) {
  showCaveSlides(caveSlideIndex += n);
}

// Thumbnail image controls
function currentCaveSlide(n) {
  showCaveSlides(caveSlideIndex = n);
}

function showCaveSlides(n) {
  let i;
  let slides = document.getElementsByClassName("caveSlides");
  let dots = document.getElementsByClassName("cave-dot");
  if (n > slides.length) {caveSlideIndex = 1}
  if (n < 1) {caveSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[caveSlideIndex-1].style.display = "block";
  dots[caveSlideIndex-1].className += " active";
}

// Cave Like & Local Storage
let caveLikeStatus;

function setCaveStatus() {
    let heart = document.querySelector('.cave-like')
    if (heart.style.color != 'red') {
        heart.style.color = 'red'
        caveLikeStatus = true;
        console.log(caveLikeStatus)
    }
    else {
        heart.style.color = '#444545';
        caveLikeStatus = false;
        console.log(caveLikeStatus)
    }
    
    // Adjust status in local storage
    if (!localStorage.getItem('caveStatus')) {
        localStorage.setItem('caveStatus', true);
    }   
    else {
        setCaveLikeStatus();
    }
    
    function setCaveLikeStatus() {
        localStorage.setItem('caveStatus', caveLikeStatus);
    }
}


// CABIN SLIDESHOW ----------------------------------------->
let cabinSlideIndex = 1;
showCabinSlides(cabinSlideIndex);

// Next/previous controls
function plusCabinSlides(n) {
  showCabinSlides(cabinSlideIndex += n);
}

// Thumbnail image controls
function currentCabinSlide(n) {
  showCabinSlides(cabinSlideIndex = n);
}

function showCabinSlides(n) {
  let i;
  let slides = document.getElementsByClassName("cabinSlides");
  let dots = document.getElementsByClassName("cabin-dot");
  if (n > slides.length) {cabinSlideIndex = 1}
  if (n < 1) {cabinSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[cabinSlideIndex-1].style.display = "block";
  dots[cabinSlideIndex-1].className += " active";
}

// Cabin Like & Local Storage
let cabinLikeStatus;

function setCabinStatus() {
    let i;
    let heart = document.querySelector('.cabin-like')
    if (heart.style.color != 'red') {
        heart.style.color = 'red'
        cabinLikeStatus = true;
        console.log(cabinLikeStatus)
    }
    else {
        heart.style.color = '#444545';
        cabinLikeStatus = false;
        console.log(cabinLikeStatus)
    }
    
    // Adjust status in local storage
    if (!localStorage.getItem('cabinStatus')) {
        localStorage.setItem('cabinStatus', true);
    }   
    else {
        setCabinLikeStatus();
    }
    
    function setCabinLikeStatus() {
        localStorage.setItem('cabinStatus', cabinLikeStatus);
    }
}

// HAWAI'I SLIDESHOW --------------------------------------->
let hawaiiSlideIndex = 1;
showHawaiiSlides(hawaiiSlideIndex);

// Next/previous controls
function plusHawaiiSlides(n) {
  showHawaiiSlides(hawaiiSlideIndex += n);
}

// Thumbnail image controls
function currentHawaiiSlide(n) {
  showHawaiiSlides(hawaiiSlideIndex = n);
}

function showHawaiiSlides(n) {
  let i;
  let slides = document.getElementsByClassName("hawaiiSlides");
  let dots = document.getElementsByClassName("hawaii-dot");
  if (n > slides.length) {hawaiiSlideIndex = 1}
  if (n < 1) {hawaiiSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[hawaiiSlideIndex-1].style.display = "block";
  dots[hawaiiSlideIndex-1].className += " active";
}

// Hawaii Like & Local Storage
let hawaiiLikeStatus;

function setHawaiiStatus() {
    let heart = document.querySelector('.hawaii-like')
    if (heart.style.color != 'red') {
        heart.style.color = 'red'
        hawaiiLikeStatus = true;
        console.log(hawaiiLikeStatus)
    }
    else {
        heart.style.color = '#444545';
        hawaiiLikeStatus = false;
        console.log(hawaiiLikeStatus)
    }
    
    // Adjust status in local storage
    if (!localStorage.getItem('hawaiiStatus')) {
        localStorage.setItem('hawaiiStatus', true);
    }   
    else {
        setHawaiiLikeStatus();
    }
    
    function setHawaiiLikeStatus() {
        localStorage.setItem('hawaiiStatus', hawaiiLikeStatus);
    }
}

// ATLANTIS SLIDESHOW --------------------------------------->
let atlantisSlideIndex = 1;
showAtlantisSlides(atlantisSlideIndex);

// Next/previous controls
function plusAtlantisSlides(n) {
  showAtlantisSlides(atlantisSlideIndex += n);
}

// Thumbnail image controls
function currentAtlantisSlide(n) {
  showAtlantisSlides(atlantisSlideIndex = n);
}

function showAtlantisSlides(n) {
  let i;
  let slides = document.getElementsByClassName("atlantisSlides");
  let dots = document.getElementsByClassName("atlantis-dot");
  if (n > slides.length) {atlantisSlideIndex = 1}
  if (n < 1) {atlantisSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[atlantisSlideIndex-1].style.display = "block";
  dots[atlantisSlideIndex-1].className += " active";
}

// Atlantis Like & Local Storage
let atlantisLikeStatus;

function setAtlantisStatus() {
    let heart = document.querySelector('.atlantis-like')
    if (heart.style.color != 'red') {
        heart.style.color = 'red'
        atlantisLikeStatus = true;
        console.log(atlantisLikeStatus)
    }
    else {
        heart.style.color = '#444545';
        atlantisLikeStatus = false;
        console.log(atlantisLikeStatus)
    }
    
    // Adjust status in local storage
    if (!localStorage.getItem('atlantisStatus')) {
        localStorage.setItem('atlantisStatus', true);
    }   
    else {
        setAtlantisLikeStatus();
    }
    
    function setAtlantisLikeStatus() {
        localStorage.setItem('atlantisStatus', atlantisLikeStatus);
    }
}

// HOTEL INFORMATION ----------------------------------->
const requestURL = "https://raw.githubusercontent.com/torgill43/wdd230/main/final-project/project/json/hotels.json";

async function getHotelData(requestURL) {
  const response = await fetch(requestURL);
  console.log(response);
  if (response.ok) {
      const jsObject = await response.json();
      const hotels = jsObject['hotels'];
      console.log(hotels);
      hotels.forEach(displayHotelInfo);
  }
}

async function displayHotelInfo(item) {
  let container = document.createElement('div');
  let name = document.createElement('h2');
  let phone = document.createElement('h4');
  let address1 = document.createElement('h4');
  let address2 = document.createElement('h4');
  let shuttle = document.createElement('h4');
  let history = document.createElement('p');

  name.textContent = item.name;
  phone.textContent = item.phone;
  address1.textContent = item.address
  address2.textContent = `${item.city}, ${item.state} ${item.zip}`;
  shuttle.textContent = `Shuttle: ${item.shuttle}`;
  history.textContent = item.history;

  container.appendChild(name);
  container.appendChild(phone);
  container.appendChild(address1);
  container.appendChild(address2);
  container.appendChild(shuttle);
  container.appendChild(history);

  switch (item.htmlLink) {
    case "cave":
      document.querySelector('.cave-info').appendChild(container);
      break
    case "cabin":
      document.querySelector('.cabin-info').appendChild(container); 
      break
    case "hawaii":
      document.querySelector('.hawaii-info').appendChild(container);
      break
    case "atlantis":
      document.querySelector('.atlantis-info').appendChild(container);
      break
  }
  }

getHotelData(requestURL);