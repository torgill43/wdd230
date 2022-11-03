// Lazy Load

const image = document.querySelectorAll(".discover-img");
console.log(image);

const pimages = document.querySelectorAll('[data-src]');
const options = {
    threshold: .25
}

function preloadImage(img) {
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
},
options);

pimages.forEach(image => {
    io.observe(image);
})

// Last Visited ------------------------------

// let current = Date.now();
// let previous = // local_storage;
// let difference = current - previous;
// let diffDays = difference/1000/60/60/24;
