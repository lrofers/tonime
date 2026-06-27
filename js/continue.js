const video=document.getElementById("video");

if(video){

video.addEventListener("timeupdate",()=>{

localStorage.setItem(
"continue",
video.currentTime
);

});

const time=localStorage.getItem("continue");

if(time){

video.currentTime=time;

}

}
