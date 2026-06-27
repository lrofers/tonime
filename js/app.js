// =========================
// TONIME APP
// =========================

window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

if(window.scrollY>80){

navbar.style.background="#090d16";

}else{

navbar.style.background="rgba(10,10,20,.45)";

}

});

// Hover Animation

document.addEventListener("mouseover",(e)=>{

if(e.target.closest(".card")){

e.target.closest(".card").classList.add("fade");

}

});
