let rating=0;

document.querySelectorAll(".star").forEach((star,index)=>{

star.onclick=()=>{

rating=index+1;

localStorage.setItem("rating",rating);

}

});
