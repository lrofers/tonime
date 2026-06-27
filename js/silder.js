// ==========================
// HERO SLIDER
// ==========================

const heroData = [

{
title:"Solo Leveling",
desc:"Sung Jin Woo menjadi Hunter terkuat setelah memperoleh System.",
image:"assets/banner/solo.jpg"
},

{
title:"Frieren",
desc:"Perjalanan elf penyihir setelah mengalahkan Raja Iblis.",
image:"assets/banner/frieren.jpg"
},

{
title:"One Piece",
desc:"Petualangan Monkey D. Luffy menjadi Raja Bajak Laut.",
image:"assets/banner/onepiece.jpg"
},

{
title:"Jujutsu Kaisen",
desc:"Yuji Itadori melawan kutukan paling mematikan.",
image:"assets/banner/jjk.jpg"
}

];

let currentHero = 0;

function updateHero(){

const hero = heroData[currentHero];

document.getElementById("hero-title").textContent =
hero.title;

document.getElementById("hero-desc").textContent =
hero.desc;

document.getElementById("hero-image").src =
hero.image;

}

function nextHero(){

currentHero++;

if(currentHero>=heroData.length){

currentHero=0;

}

updateHero();

}

updateHero();

setInterval(nextHero,5000);
