const animeData = [

{
title:"Solo Leveling",
image:"assets/covers/solo-leveling.jpg",
genre:"Action • Fantasy",
rating:"9.2",
status:"Trending"
},

{
title:"Frieren",
image:"assets/covers/frieren.jpg",
genre:"Fantasy",
rating:"9.4",
status:"Popular"
},

{
title:"Jujutsu Kaisen",
image:"assets/covers/jjk.jpg",
genre:"Action",
rating:"9.1",
status:"Trending"
},

{
title:"One Piece",
image:"assets/covers/onepiece.jpg",
genre:"Adventure",
rating:"9.8",
status:"Ongoing"
},

{
title:"Blue Lock",
image:"assets/covers/bluelock.jpg",
genre:"Sport",
rating:"8.9",
status:"Popular"
},

{
title:"Chainsaw Man",
image:"assets/covers/chainsaw.jpg",
genre:"Action",
rating:"8.8",
status:"Completed"
},

{
title:"Oshi no Ko",
image:"assets/covers/oshinoko.jpg",
genre:"Drama",
rating:"9.0",
status:"Completed"
},

{
title:"Spy x Family",
image:"assets/covers/spyxfamily.jpg",
genre:"Comedy",
rating:"8.9",
status:"Popular"
}

];

function createCard(anime){

return`

<div class="card fade">

<img src="${anime.image}" loading="lazy">

<div class="card-body">

<div class="card-title">

${anime.title}

</div>

<div class="card-info">

⭐ ${anime.rating}

</div>

<div class="card-info">

${anime.genre}

</div>

</div>

</div>

`;

}

function renderAnime(){

const trending=document.getElementById("trending");
const popular=document.getElementById("popular");
const ongoing=document.getElementById("ongoing");
const completed=document.getElementById("completed");

trending.innerHTML="";
popular.innerHTML="";
ongoing.innerHTML="";
completed.innerHTML="";

animeData.forEach(anime=>{

if(anime.status==="Trending")
trending.innerHTML+=createCard(anime);

if(anime.status==="Popular")
popular.innerHTML+=createCard(anime);

if(anime.status==="Ongoing")
ongoing.innerHTML+=createCard(anime);

if(anime.status==="Completed")
completed.innerHTML+=createCard(anime);

});

}

document.addEventListener("DOMContentLoaded",renderAnime);
