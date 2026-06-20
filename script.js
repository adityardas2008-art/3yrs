/* ==========================================
          LOVE STORY WEBSITE
            SCRIPT PART 1
========================================== */

let currentPage = 0;

const pages = document.querySelectorAll(".page");

const nextButtons = document.querySelectorAll(".nextBtn");

function showPage(index){

pages.forEach((page)=>{

page.classList.remove("active");

});

pages[index].classList.add("active");

window.scrollTo({

top:0,

behavior:"smooth"

});

}

nextButtons.forEach(button=>{

button.addEventListener("click",()=>{

if(currentPage<pages.length-1){

currentPage++;

showPage(currentPage);

}

});

});

/* ==========================================
           FLOATING HEARTS
========================================== */

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*20)+"px";

heart.style.animationDuration=(5+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,600);

/* ==========================================
          FALLING FLOWERS
========================================== */

const flowers=[

"🌸",

"🌹",

"🌺",

"💮",

"🌷"

];

function createFlower(){

const flower=document.createElement("div");

flower.className="flower";

flower.innerHTML=

flowers[Math.floor(Math.random()*flowers.length)];

flower.style.left=Math.random()*100+"vw";

flower.style.fontSize=(18+Math.random()*20)+"px";

flower.style.animationDuration=(5+Math.random()*5)+"s";

document.body.appendChild(flower);

setTimeout(()=>{

flower.remove();

},10000);

}

setInterval(createFlower,700);

/* ==========================================
           STARS
========================================== */

function createStars(){

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDuration=(2+Math.random()*4)+"s";

document.body.appendChild(star);

}

}

createStars();
/* ==========================================
            QUIZ LOGIC (CORRECTED)
========================================== */

const quizPages=document.querySelectorAll("#page4,#page5,#page6,#page7");

quizPages.forEach(page=>{

const options=page.querySelectorAll(".option");

const result=page.querySelector(".quizResult");

const nextButton=page.querySelector(".nextBtn");

options.forEach(option=>{

option.addEventListener("click",()=>{

if(option.classList.contains("correct")){

result.innerHTML="🥹❤️ Yayy!! That's my smart baby. I knew you'd remember. Let's continue our beautiful journey together. ❤️✨";

result.style.color="#7CFF8A";

option.style.background="#16c60c";

option.style.color="white";

nextButton.classList.remove("hidden");

options.forEach(btn=>{

btn.disabled=true;

});

}else{

const messages=[

"🤭 Hehe... Think once again baby ❤️",

"🥹 Awww... Not this one. Try again jaan ❤️",

"😘 My memory queen can do better ❤️",

"🫂 Almost... Give it one more try ❤️",

"💖 Come on baby... I know you'll remember ❤️"

];

result.innerHTML=

messages[Math.floor(Math.random()*messages.length)];

result.style.color="#FFD166";

option.style.background="#ff4d88";

option.style.color="white";

}

});

});

});

/* ==========================================
       BUTTON RIPPLE EFFECT
========================================== */

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

ripple.style.position="absolute";

ripple.style.width="12px";

ripple.style.height="12px";

ripple.style.borderRadius="50%";

ripple.style.background="rgba(255,255,255,.8)";

ripple.style.left=e.offsetX+"px";

ripple.style.top=e.offsetY+"px";

ripple.style.transform="scale(0)";

ripple.style.transition=".6s";

this.appendChild(ripple);

setTimeout(()=>{

ripple.style.transform="scale(20)";

ripple.style.opacity="0";

},20);

setTimeout(()=>{

ripple.remove();

},600);

});

});
/* ==========================================
          LOVE METER
========================================== */

let taps=0;

const tapButton=document.getElementById("tapButton");

const secretHeart=document.getElementById("secretHeart");

const loveFill=document.getElementById("loveFill");

const meterNext=document.querySelector("#page9 .nextBtn");

if(tapButton){

tapButton.addEventListener("click",()=>{

taps++;

let percent=taps*10;

if(percent>=100){

percent=98;

}

loveFill.style.width=percent+"%";

loveFill.innerHTML=percent+"%";

if(taps>=10){

secretHeart.classList.remove("hidden");

}

});

}

if(secretHeart){

secretHeart.addEventListener("click",()=>{

loveFill.style.width="100%";

loveFill.innerHTML="∞ LOVE ❤️";

secretHeart.innerHTML="❤️ Welcome Again To My Heart ❤️";

flowerBlast();

confettiBlast();

meterNext.classList.remove("hidden");

});

}

/* ==========================================
         FLOWER SHOWER
========================================== */

function flowerBlast(){

for(let i=0;i<100;i++){

setTimeout(()=>{

createFlower();

},i*30);

}

}

/* ==========================================
          CONFETTI
========================================== */

function confettiBlast(){

const colors=[

"#ff4d88",

"#ffd700",

"#ffffff",

"#7c4dff",

"#00e5ff"

];

for(let i=0;i<120;i++){

let confetti=document.createElement("div");

confetti.style.position="fixed";

confetti.style.left=Math.random()*100+"vw";

confetti.style.top="-20px";

confetti.style.width="8px";

confetti.style.height="8px";

confetti.style.borderRadius="50%";

confetti.style.background=

colors[Math.floor(Math.random()*colors.length)];

confetti.style.transition="4s linear";

confetti.style.zIndex="99999";

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.style.transform=

"translateY(110vh) rotate(720deg)";

confetti.style.opacity="0";

},50);

setTimeout(()=>{

confetti.remove();

},4500);

}

}

/* ==========================================
        FINAL BUTTON
========================================== */

const yesButton=document.querySelector(".yesButton");

if(yesButton){

yesButton.addEventListener("click",()=>{

confettiBlast();

flowerBlast();

setTimeout(()=>{

alert("❤️ Forever Starts Here ❤️\n\nHappy 3 Years My Love 🥹🫂✨");

},600);

});

}
/* ==========================================
        SCRIPT PART 4
========================================== */

/* ---------- Smooth Page Animation ---------- */

pages.forEach(page=>{

page.style.transition="opacity .7s, transform .7s";

});

/* ---------- Typing Animation ---------- */

function typingEffect(element,speed=35){

if(!element)return;

const text=element.innerHTML;

element.innerHTML="";

let i=0;

function type(){

if(i<text.length){

element.innerHTML+=text.charAt(i);

i++;

setTimeout(type,speed);

}

}

type();

}

document.querySelectorAll("h1,h2").forEach(title=>{

typingEffect(title,25);

});

/* ---------- Floating Hearts On Click ---------- */

document.addEventListener("click",(e)=>{

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.fontSize="24px";

heart.style.pointerEvents="none";

heart.style.transition="1.2s";

heart.style.zIndex="999999";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-90px) scale(2)";

heart.style.opacity="0";

},20);

setTimeout(()=>{

heart.remove();

},1200);

});

/* ---------- Final Forever Text Glow ---------- */

const forever=document.querySelector(".forever");

if(forever){

setInterval(()=>{

forever.style.color=

`hsl(${Math.random()*360},100%,75%)`;

},900);

}

/* ---------- Welcome Animation ---------- */

window.addEventListener("load",()=>{

showPage(0);

});

/* ---------- Console Message ---------- */

console.log("❤️ Happy 3 Years Khushi ❤️");

/* ==========================================
        END OF SCRIPT
========================================== */
