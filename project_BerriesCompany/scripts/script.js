// Header BackGround change on scroll
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

// Last update
const d = new Date();
const year = d.getFullYear();

// current year
document.querySelector(".year").textContent = year;

// Last Updated
let lastModif = new Date(document.lastModified);
let dayModif = lastModif.toLocaleString("en-US", {day: "numeric"});
let monthModif = lastModif.toLocaleString("en-US", {month: "numeric"});
let yearModif = lastModif.getFullYear();
let hoursModif = lastModif.getHours();
let minutesModif = lastModif.getMinutes();
let secondsModif = lastModif.getSeconds();

let fullDateModif = `${monthModif}/${dayModif}/${yearModif} ${hoursModif}:${minutesModif}:${secondsModif}`;

document.querySelector(".date-modification").textContent = fullDateModif;


// hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// Toggle menu when clicking outside
document.addEventListener("click", (event) => {
    const target = event.target;
    const isHamburger = target.classList.contains("hamburger");
    const isNavMenu = target.classList.contains("navigation") || target.closest(".navigation");
    
    if (!isHamburger && !isNavMenu) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
});

