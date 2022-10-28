const image = document.querySelectorAll('img');

// const io = new IntersectionObserver (
//     (entries, io) => {
//         entries.forEach(entry => 
//             {
//                 console.log(entries);
//             })
//         // console.log(io);
//     },
//     {
//         threshold: [.5]
//     }
// )

// image.forEach(image  => {
//     io.observe(image);
// })

// square brackets used to target attributes
const pimages = document.querySelectorAll('[data-src]');
const options = {
    threshold: 0
    // rootMargin: "0px 0px 100px 0px"
}

function preloadImage(img){
    const source = img.getAttribute('data-src');
    if (!source){
        return;
    }

    img.src = source;
}

const io = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => 
            {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    preloadImage(entry.target);
                    io.unobserve(entry.target);
                }
            })
        // console.log(io);
    },
    options);

pimages.forEach(image  => {
    io.observe(image);
})

// LOCAL STORAGE

    // setItem puts it into local storage
    // key value pair
// localStorage.setItem('msg1', 'Hello permanent');

// localStorage.setItem('visitDate', Date.now());

// sessionStorage.setItem('msg2', 'Hello temporary')

//     // when retrieving, message will be the value related to msg1
// let message = localStorage.getItem('msg1');

// let visitDate = localStorage.getItem('visitDate');
// console.log(visitDate);
// let mathDate = Math.floor(visitDate / 1000 / 60 / 60 / 24);
// console.log(mathDate);

    // getItem gets it from storage and puts it on page
let prevDate;

let currDate = Date.now();


// difference bw two dates (or last time they visited)
if(!localStorage.getItem('lastVisit')) {
    localStorage.setItem('lastVisit', Date.now());
    document.querySelector(h2).textContent = "This is your first visit!"
    // set localStorage to todays Date
    // 'This is your first visit!'
} else {
    setDate();
    // get localStorage value
    // subtract 2 dates today's date & previous storage
    //              /1000/60/60/24
    // set new date in local storage
}

function setDate() {
    let prevDate = localStorage.getItem('lastVisit');
    let currDate = Date.now();
    // let currDate = new Date('2022-03-24');

    let difference = currDate - prevDate;
        console.log(difference);
        let daysDiff = Math.floor(difference/1000/60/60/24);
    
    document.querySelector('#diff').textContent = daysDiff;
    localStorage.setItem('lastVisit', Date.now());
}