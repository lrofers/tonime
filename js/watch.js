const video = document.getElementById("video");

const savedTime = localStorage.getItem("watch-time");

if(savedTime){
    video.currentTime = Number(savedTime);
}

video.addEventListener("timeupdate", () => {
    localStorage.setItem("watch-time", video.currentTime);
});

video.addEventListener("ended", () => {
    localStorage.removeItem("watch-time");
});
