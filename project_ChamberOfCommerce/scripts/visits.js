// visits counts
let lastVisit = localStorage.getItem("last-visit");

// current timestamp
let currentTimestamp = Date.now();

let timeDiff = currentTimestamp - lastVisit;
let daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
document.querySelector(".visit-number").innerHTML = daysDiff;

localStorage.setItem("last-visit", currentTimestamp); // Store the current visit time in local storage

// show first message or visit number
if (daysDiff === 0) {
    document.querySelector(".visit-message").innerHTML = "Welcome to Southern Chile Chamber! This is your first visit!";
}
else {
    document.querySelector(".visit-message").style.display = "none";
    document.querySelector(".second-visit").style.display = "flex";
}