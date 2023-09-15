// announcement banner
if (dayName === "Monday" || dayName === "Tuesday") {
    document.querySelector(".header").style.paddingTop = "40px";
}
else {
    console.log("Otro dia");
    document.querySelector(".announcement").style.display = "none";
}
