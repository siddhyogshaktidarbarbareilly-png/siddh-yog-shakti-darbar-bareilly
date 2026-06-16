
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

/* =========================
   CHATBOT SYSTEM
========================= */

const chatToggle = document.getElementById("chatToggle");
const chatbotContainer = document.getElementById("chatbot-container");
const closeChat = document.getElementById("closeChat");
const sendBtn = document.getElementById("sendBtn");
const micBtn = document.getElementById("micBtn");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatbot-messages");

if(chatToggle){
chatToggle.onclick = () => {
chatbotContainer.style.display = "flex";
};
}

if(closeChat){
closeChat.onclick = () => {
chatbotContainer.style.display = "none";
};
}

/* FAQ DATABASE */

const faq = {

"संस्था कहाँ स्थित है":
"सिद्ध योग शक्ति दरबार, 88 सिल्वर एस्टेट, महानगर के पास, पीलीभीत बायपास रोड, बरेली में स्थित है।",

"गुरुजी कौन हैं":
"सिद्ध योग शक्ति दरबार के पीठाधीश्वर पूज्य श्री गोविंद जी महाराज हैं।",

"आरती कब होती है":
"आरती प्रत्येक रविवार दोपहर 3 बजे तथा प्रत्येक गुरुवार शाम 7:30 बजे होती है।",

"ध्यान साधना कब होती है":
"विशेष ध्यान साधना प्रत्येक रविवार आयोजित की जाती है।",

"संपर्क नंबर क्या है":
"संपर्क के लिए 9897623157 पर संपर्क करें।",

"फेसबुक लाइव कैसे देखें":
"होम पेज पर दिए गए Watch Aarti Live बटन पर क्लिक करें।",

"शक्तिपात क्या है":
"शक्तिपात गुरु कृपा द्वारा आध्यात्मिक ऊर्जा का जागरण है।",

"कुंडलिनी क्या है":
"कुंडलिनी शरीर में स्थित दिव्य शक्ति मानी जाती है।",

"दर्शन का समय क्या है":
"दर्शन और जानकारी के लिए कृपया संस्था से संपर्क करें।",

"माँ बगलामुखी साधना कब होती है":
"माँ बगलामुखी साधना प्रत्येक गुरुवार आयोजित होती है।",

"गुरुजी कौन हैं":
"सिद्ध योग शक्ति दरबार के पीठाधीश्वर पूज्य श्री गोविंद जी महाराज हैं।",

"गोविंद जी महाराज कौन हैं":
"पूज्य श्री गोविंद जी महाराज सिद्ध योग शक्ति दरबार के पीठाधीश्वर एवं आध्यात्मिक गुरु हैं।",

"संस्था कहाँ स्थित है":
"88 सिल्वर एस्टेट, महानगर के पास, पीलीभीत बायपास रोड, बरेली उत्तर प्रदेश में स्थित है।",

"पता क्या है":
"88 सिल्वर एस्टेट, महानगर के पास, पीलीभीत बायपास रोड, बरेली।",

"आरती कब होती है":
"प्रत्येक रविवार दोपहर 3 बजे तथा गुरुवार शाम 7:30 बजे।",

"ध्यान साधना कब होती है":
"प्रत्येक रविवार विशेष ध्यान साधना आयोजित की जाती है।",

"संपर्क नंबर क्या है":
"9897623157 पर संपर्क करें।",

"व्हाट्सएप नंबर क्या है":
"9897623157 पर व्हाट्सएप कर सकते हैं।",

"फेसबुक लाइव कैसे देखें":
"होम पेज के Watch Aarti Live बटन पर क्लिक करें।",

"यूट्यूब चैनल कौन सा है":
"Secrets Of Life By Govind Ji यूट्यूब चैनल देखें।",

"शक्तिपात क्या है":
"शक्तिपात गुरु कृपा द्वारा आध्यात्मिक शक्ति का जागरण है।",

"कुंडलिनी क्या है":
"कुंडलिनी शरीर में स्थित दिव्य शक्ति मानी जाती है।",

"माँ बगलामुखी साधना कब होती है":
"प्रत्येक गुरुवार विशेष साधना होती है।",

"दर्शन कैसे करें":
"दर्शन हेतु संस्था से संपर्क करें।",

"ध्यान कैसे करें":
"गुरुजी के मार्गदर्शन में ध्यान साधना की जा सकती है।",

"साधना का लाभ क्या है":
"आंतरिक शांति, आध्यात्मिक जागरण और आत्मिक उन्नति।",

"गुरु मंत्र कैसे प्राप्त करें":
"इसके लिए संस्था में संपर्क करें।",

"आत्मज्ञान क्या है":
"स्वयं के वास्तविक स्वरूप को जानना आत्मज्ञान कहलाता है।",

"कार्यक्रम कब होते हैं":
"रविवार और गुरुवार को नियमित कार्यक्रम होते हैं।",

"क्या ऑनलाइन सत्संग होता है":
"नवीनतम जानकारी के लिए फेसबुक पेज देखें।"

};

/* MESSAGE FUNCTION */

function addMessage(text,type){

const div = document.createElement("div");

div.className =
type === "user"
? "user-message"
: "bot-message";

div.innerText = text;

chatMessages.appendChild(div);

chatMessages.scrollTop =
chatMessages.scrollHeight;

}

/* SPEAK */

function speak(text){

const speech =
new SpeechSynthesisUtterance(text);

speech.lang = "hi-IN";

speech.rate = 1;

window.speechSynthesis.speak(speech);

}

/* FIND ANSWER */

function getAnswer(question){

question = question.toLowerCase();

for(let key in faq){

if(question.includes(key.toLowerCase())){

return faq[key];

}

}

return "🙏 क्षमा कीजिए। मेरे पास इस प्रश्न का उत्तर उपलब्ध नहीं है। अधिक जानकारी के लिए कृपया संस्था से संपर्क करें।";
}

/* SEND MESSAGE */

function sendMessage(){

const question =
chatInput.value.trim();

if(question === "") return;

addMessage(question,"user");

const answer =
getAnswer(question);

setTimeout(()=>{

addMessage(answer,"bot");

speak(answer);

},500);

chatInput.value = "";

}

sendBtn.addEventListener(
"click",
sendMessage
);

chatInput.addEventListener(
"keypress",
function(e){

if(e.key === "Enter"){

sendMessage();

}

}
);

/* QUICK QUESTIONS */

document
.querySelectorAll(".q-btn")
.forEach(btn=>{

btn.addEventListener(
"click",
function(){

chatInput.value =
this.innerText;

sendMessage();

});

});

/* VOICE INPUT */

if(
'webkitSpeechRecognition'
in window
){

const recognition =
new webkitSpeechRecognition();

recognition.lang = "hi-IN";

recognition.continuous = false;

recognition.interimResults = false;

micBtn.addEventListener(
"click",
()=>{

recognition.start();

});

recognition.onresult =
function(event){

const text =
event.results[0][0].transcript;

chatInput.value = text;

sendMessage();

};

}