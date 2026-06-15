
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

// =======================
// CHATBOT START
// =======================

const chatbotHeader =
document.getElementById("chatbot-header");

const chatbotBody =
document.getElementById("chatbot-body");

if(chatbotHeader){

chatbotHeader.addEventListener("click",()=>{

if(chatbotBody.style.display==="block"){

chatbotBody.style.display="none";

}else{

chatbotBody.style.display="block";

}

});

}

const sendBtn =
document.getElementById("sendBtn");

const chatInput =
document.getElementById("chatInput");

const chatMessages =
document.getElementById("chatbot-messages");

const qa = {

"संस्था कहाँ है":
"सिद्ध योग शक्ति दरबार बरेली, सिल्वर एस्टेट, नियर महानगर, पीलीभीत बायपास रोड बरेली में स्थित है।",

"पता":
"88 सिल्वर एस्टेट, नियर महानगर, पीलीभीत बायपास रोड, बरेली।",

"गुरु जी कौन हैं":
"परम पूज्य सिद्धयोगी गोविन्द जी संस्था के आध्यात्मिक मार्गदर्शक हैं।",

"गुरुजी":
"परम पूज्य सिद्धयोगी गोविन्द जी संस्था के आध्यात्मिक मार्गदर्शक हैं।",

"आरती कब होती है":
"आरती प्रत्येक रविवार दोपहर 3 बजे तथा प्रत्येक गुरुवार शाम 7:30 बजे होती है।",

"रविवार":
"रविवार को ध्यान साधना दोपहर 12 बजे से 3 बजे तक होती है।",

"गुरुवार":
"गुरुवार को माँ बगलामुखी साधना शाम 6 बजे से 7:30 बजे तक होती है।",

"ध्यान":
"प्रत्येक रविवार विशेष ध्यान साधना आयोजित की जाती है।",

"साधना":
"विशेष साधना प्रत्येक गुरुवार आयोजित की जाती है।",

"फेसबुक":
"संस्था की आरती और कार्यक्रम Facebook Live पर देखे जा सकते हैं।",

"यूट्यूब":
"हमारा यूट्यूब चैनल Secrets of Life by Govind Ji है।",

"संपर्क":
"WhatsApp नंबर 9897623157 है।",

"फोन":
"WhatsApp नंबर 9897623157 है।",

"दान":
"दान संबंधी जानकारी के लिए कृपया संस्था से संपर्क करें।",

"कार्यक्रम":
"संस्था में नियमित सत्संग, ध्यान, साधना और आरती आयोजित की जाती है।",

"नमस्ते":
"🙏 नमस्ते। सिद्ध योग शक्ति दरबार में आपका स्वागत है।",

"hello":
"🙏 नमस्ते। सिद्ध योग शक्ति दरबार में आपका स्वागत है।"
};

function speak(text){

const speech =
new SpeechSynthesisUtterance(text);

speech.lang = "hi-IN";

window.speechSynthesis.speak(speech);

}

function sendMessage(){

const question =
chatInput.value.toLowerCase().trim();

if(question==="") return;

chatMessages.innerHTML +=
`<div class="user-message">${question}</div>`;

let answer =
"माफ़ कीजिए, मेरे पास इस प्रश्न का उत्तर उपलब्ध नहीं है। अधिक जानकारी के लिए कृपया संस्था से संपर्क करें।";

for(let key in qa){

if(question.includes(key.toLowerCase())){

answer = qa[key];
break;

}

}

chatMessages.innerHTML +=
`<div class="bot-message">${answer}</div>`;

speak(answer);

chatInput.value="";

chatMessages.scrollTop =
chatMessages.scrollHeight;

}

if(sendBtn){

sendBtn.addEventListener(
"click",
sendMessage
);

}


// MICROPHONE

const micBtn =
document.getElementById("micBtn");

if(micBtn){

const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;

if(SpeechRecognition){

const recognition =
new SpeechRecognition();

recognition.lang = "hi-IN";

micBtn.addEventListener("click",()=>{

recognition.start();

});

recognition.onresult = (event)=>{

chatInput.value =
event.results[0][0].transcript;

};

}

}

// =======================
// CHATBOT END
// =======================

