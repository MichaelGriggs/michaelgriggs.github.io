const hambutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive')
}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {
    if (window.innerWidth > 760) mainnav.classList.remove('responsive')
};

//I didn't write all of this JS code, but I adapted and really studied it to understand how to do it.