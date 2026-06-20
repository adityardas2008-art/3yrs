/* ==========================================
   LOVE STORY WEBSITE
   PART 1
========================================== */

let currentPage = 0;

const pages = document.querySelectorAll(".page");

const nextButtons = document.querySelectorAll(".nextBtn");

function showPage(index){

pages.forEach((page)=>{

page.classList.remove("active");

});

pages[index].classList.add("active");

window.scrollTo(0,0);

}

nextButtons.forEach((button)=>{

button.addEventListener("click",()=>{

if(currentPage<pages.length-1){

currentPage++;

showPage(currentPage);

}

});

});

/* ==========================================
      FLOATING STARS
========================================== */

function createStars(){

for(let i=0;i<120;i++){

let star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDuration=

(4+Math.random()*8)+"s";

star.style.animationDelay=

Math.random()*5+"s";

document.body.appendChild(star);

}

}

createStars();

/* ==========================================
      FLOATING HEARTS
========================================== */

function createHeart(){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=

(15+Math.random()*30)+"px";

heart.style.animationDuration=

(5+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,500);

/* ==========================================
      FALLING FLOWERS
========================================== */

const flowers=["🌸","🌺","🌹","💮","🌷"];

function createFlower(){

let flower=document.createElement("div");

flower.className="flower";

flower.innerHTML=

flowers[Math.floor(

Math.random()*flowers.length)];

flower.style.left=

Math.random()*100+"vw";

flower.style.animationDuration=

(5+Math.random()*5)+"s";

flower.style.fontSize=

(18+Math.random()*20)+"px";

document.body.appendChild(flower);

setTimeout(()=>{

flower.remove();

},10000);

}

setInterval(createFlower,700);
/* ==========================================
          LOVE QUIZ
========================================== */

const questions=document.querySelectorAll(".question");

questions.forEach((question)=>{

const buttons=question.querySelectorAll(".option");

buttons.forEach((button)=>{

button.addEventListener("click",()=>{

if(button.classList.contains("correct")){

button.style.background="#00c853";

button.innerHTML="❤️ Correct Baby ❤️";

}else{

const msgs=[

"🤭 Hehe...Try Again Baby ❤️",

"🥹 Think Once More Jaan ❤️",

"😘 Not This One...I Know You'll Remember ❤️",

"🫂 Almost...Try Again Sweetu ❤️"

];

button.innerHTML=

msgs[Math.floor(Math.random()*msgs.length)];

button.style.background="#ff4081";

}

});

});

});

/* ==========================================
          LOVE METER
========================================== */

let tap=0;

const tapBtn=document.getElementById("tapButton");

const heartBtn=document.getElementById("secretHeart");

const fill=document.getElementById("loveFill");

if(tapBtn){

tapBtn.onclick=function(){

tap++;

let value=tap*9;

if(value>98){

value=98;

heartBtn.style.display="inline-block";

}

fill.style.width=value+"%";

fill.innerHTML=value+"%";

}

}

if(heartBtn){

heartBtn.onclick=function(){

fill.style.width="100%";

fill.innerHTML="Infinity ❤️";

heartBtn.innerHTML=

"Welcome Again To My Heart ❤️";

flowerBlast();

}

}

/* ==========================================
        FLOWER BLAST
========================================== */

function flowerBlast(){

for(let i=0;i<80;i++){

setTimeout(()=>{

createFlower();

},i*40);

}

}

/* ==========================================
       FINAL BUTTON
========================================== */

const yes=document.querySelector(".yesButton");

if(yes){

yes.onclick=function(){

alert(

"❤️ Forever Starts From Today ❤️\n\nHappy 3 Years My Love 🫂✨"

);

};

}

/* ==========================================
        PAGE LOADER
========================================== */

window.onload=function(){

showPage(0);

}

/* ==========================================
         END OF PART 2
========================================== */
/* ==========================================
        TYPING EFFECT
========================================== */

function typeWriter(element,speed=50){

if(!element)return;

const text=element.innerHTML;

element.innerHTML="";

let i=0;

function typing(){

if(i<text.length){

element.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,speed);

}

}

typing();

}

document.querySelectorAll("h1,h2,p").forEach(el=>{

typeWriter(el,25);

});

/* ==========================================
        CONFETTI EFFECT
========================================== */

function confetti(){

const colors=["#ff4fa3","#ffd700","#ffffff","#b266ff","#ff6699"];

for(let i=0;i<120;i++){

let c=document.createElement("div");

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.width="8px";

c.style.height="8px";

c.style.background=

colors[Math.floor(Math.random()*colors.length)];

c.style.borderRadius="50%";

c.style.zIndex="9999";

c.style.transition="4s linear";

document.body.appendChild(c);

setTimeout(()=>{

c.style.transform=

"translateY(110vh) rotate(720deg)";

c.style.opacity="0";

},50);

setTimeout(()=>{

c.remove();

},4500);

}

}

/* ==========================================
     PAGE CHANGE CONFETTI
========================================== */

nextButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

confetti();

});

});

/* ==========================================
      HEART CLICK EFFECT
========================================== */

document.addEventListener("click",(e)=>{

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.fontSize="25px";

heart.style.pointerEvents="none";

heart.style.transition="1s";

heart.style.zIndex="99999";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-80px) scale(2)";

heart.style.opacity="0";

},20);

setTimeout(()=>{

heart.remove();

},1200);

});

/* ==========================================
      FINAL PAGE SURPRISE
========================================== */

const forever=document.querySelector(".forever");

if(forever){

setInterval(()=>{

forever.style.color=

`hsl(${Math.random()*360},100%,75%)`;

},800);

}

/* ==========================================
      BACKGROUND MUSIC
========================================== */

const music=new Audio("music/love.mp3");

music.loop=true;

music.volume=0.4;

document.body.addEventListener("click",()=>{

music.play().catch(()=>{});

},{once:true});

/* ==========================================
      END ❤️
========================================== */

console.log("❤️ Happy 3 Years Khushi ❤️");
