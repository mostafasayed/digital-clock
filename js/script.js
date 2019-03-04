const CLOCKKTEXT = document.querySelector("g text");
const FORMATBOX = document.querySelector("#format");
const FORMATTEXT = document.querySelector("#format .format-text");
const TWNRTYFOURCHCEK = document.querySelector("#twenty-four");
const TWELVECHCEK = document.querySelector("#twelve");

let twelveFale = true;

function leadingZero (time) {
    if (time > 9) {
        return time;
    } else {
        return "0" + time;
    }
}

function getTime () {
    let date = new Date();
    let hours = date.getHours();
    hours > 12 ? FORMATTEXT.innerHTML = "PM" : FORMATTEXT.innerHTML = "AM"
    hours = (twelveFale && hours > 12) ? hours - 12 : hours
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = leadingZero(hours) + ":" + leadingZero(minutes) + ":" + leadingZero(seconds);
    CLOCKKTEXT.innerHTML=time;
}

function twelveFormat () {
    twelveFale = true;
    FORMATBOX.setAttribute("visibility", "visible");
    TWNRTYFOURCHCEK.setAttribute("fill", "white");
    TWELVECHCEK.setAttribute("fill", "black");
}

function twentyFourFormat () {
    twelveFale = false;
    FORMATBOX.setAttribute("visibility", "hidden");
    TWNRTYFOURCHCEK.setAttribute("fill", "black");
    TWELVECHCEK.setAttribute("fill", "white");
}

getTime();
TWELVECHCEK.addEventListener("click", twelveFormat);
TWNRTYFOURCHCEK.addEventListener("click", twentyFourFormat);
setInterval(getTime, 100);
