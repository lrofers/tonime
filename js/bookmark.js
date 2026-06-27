const bookmarkBtn = document.getElementById("bookmark");

if(bookmarkBtn){

bookmarkBtn.onclick=()=>{

let bookmarks=
JSON.parse(localStorage.getItem("bookmark"))||[];

const anime=document.getElementById("title").textContent;

if(!bookmarks.includes(anime)){

bookmarks.push(anime);

localStorage.setItem(
"bookmark",
JSON.stringify(bookmarks)
);

alert("Berhasil ditambahkan ke Bookmark");

}else{

alert("Anime sudah ada");

}

}

}
