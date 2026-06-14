
const slides = document.querySelectorAll(".slide");

let current = 0;

function nextSlide(){

slides[current].classList.remove("active");

current++;

if(current >= slides.length){
current = 0;
}

slides[current].classList.add("active");

}

setInterval(nextSlide, 4000);

let count = localStorage.getItem("visitorCount");

if(!count){
count = 1000;
}

count++;

localStorage.setItem("visitorCount", count);

const visitorElement =
document.getElementById("visitor-count");

if(visitorElement){
visitorElement.innerText = count;
}

// Aarti Countdown

function updateCountdown() {

const now = new Date();

let nextEvent = null;

for(let i=0;i<14;i++){

let test = new Date();

test.setDate(now.getDate()+i);

const day = test.getDay();

if(day === 4){ // Thursday

let thursday = new Date(test);

thursday.setHours(19,30,0,0);

if(thursday > now){

nextEvent = thursday;

break;

}

}

if(day === 0){ // Sunday

let sunday = new Date(test);

sunday.setHours(15,0,0,0);

if(sunday > now){

nextEvent = sunday;

break;

}

}

}

const diff = nextEvent - now;

const days = Math.floor(diff/(1000*60*60*24));

const hours = Math.floor(
(diff%(1000*60*60*24))/(1000*60*60)
);

const minutes = Math.floor(
(diff%(1000*60*60))/(1000*60)
);

document.getElementById("countdown").innerHTML =
days+"d "+
hours+"h "+
minutes+"m";

}

setInterval(updateCountdown,1000);

updateCountdown();