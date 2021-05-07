const prograssBar = document.querySelector('.prograssBar'); 
const song = document.querySelector('.aud'); 
const ply = document.querySelector('.play');
const fwd = document.querySelector('.forward');
const bwd = document.querySelector('.backward');
const logo = document.querySelector('.logo');
const title_name = document.querySelector(".title-name");
const artist_name = document.querySelector(".artist-name");
const revbtn = document.querySelector('.reverse'); 
const songs_list = document.querySelector('.songs_list');
const dropbtn = document.querySelector('.dropdown');
const songtags = document.getElementsByTagName("LI")
const poster = document.querySelector('.poster');


let Count = -1;
let reverse_btn = -1;

const Songs = [
      "songs/The Weeknd - Blinding Lights 320kbps(mp3by.in).mp3",
      "songs/Meant To Be(PaglaSongs).mp3",
      "songs/Masked Wolf - Astronaut In The Ocean.mp3",
      "songs/Fake A Smile(PagalWorld.com.se).mp3",
      "songs/Peaches- Justin Bieber-VlcMusic.CoM.mp3",
      "songs/Sorry(PagalWorld.com.se).mp3"
]
const songs_title = [
    "Blinding Lights",
    "Meant To Be",
    "Astronaut-In-The-Ocean",
    "Fake-a-Smile",
    "Peaches",
    "Sorry"
]
const songs_singer = [
    "The Weeknd",
    "Ananya Birla",
    "Masked Wolf",
    "Alan Waker",
    "justin Bieber",
    "Alan Waker"
]
const songs_image = [
    "covers/2670931.jpg",
    "covers/size_xxl (1).png",
    "covers/Astronaut-In-The-Ocean.jpg",
    "covers/Fake-a-smile.jpg",
    "covers/justin-biebet-hold-on.jpg",
    "covers/Alan-Walker-sorry.jpg"
]

//--------------------------filled arrays however, below needs to be filled------------------------------------------------------------

function stopped(){
    poster.style.display ="none";
}

poster.addEventListener('mousemove', ()=>{
   poster.style.opacity = "0";
   setTimeout(stopped,3000);
})

const SongsAdd = [];
const songs_titleAdd = [];
const songs_singerAdd = [];
const songs_imageAdd = [];

songs_list.addEventListener('mousemove', ()=>{

        songs_list.style.transitionDelay = "0s"
        document.getElementById("dropbox-title").style.transitionDelay= "0s";
        document.getElementById("box-title").style.transitionDelay= "0s";

        document.getElementById("dropbox-title").style.backgroundColor = "black";
        document.getElementById("box-title").style.color = "white";
        
        document.getElementById("song1").style.top = "50px"
        document.getElementById("song2").style.top = "50px"
        document.getElementById("song3").style.top = "50px"
        document.getElementById("song4").style.top = "50px"
        document.getElementById("song5").style.top = "50px"
        document.getElementById("song6").style.top = "50px"

        document.getElementById("song1").style.display = "initial"
        document.getElementById("song2").style.display = "initial"
        document.getElementById("song3").style.display = "initial"
        document.getElementById("song4").style.display = "initial"
        document.getElementById("song5").style.display = "initial"
        document.getElementById("song6").style.display = "initial"

        document.getElementById("song2").style.opacity = "4"
        document.getElementById("song3").style.opacity = "4"
        document.getElementById("song1").style.opacity = "4"
        document.getElementById("song4").style.opacity = "4"
        document.getElementById("song5").style.opacity = "4"
        document.getElementById("song6").style.opacity = "4"

        songs_list.style.height = "400px"; 
        songs_list.classList.add("active");

   
})

songs_list.addEventListener('mouseleave' , ()=>{
   
        songs_list.style.height = "50px";
        dropbtn.style.width = "initial"
        dropbtn.style.height = "initial"
        dropbtn.src = "thumbnil/icons8-double-down-24.png";
        
        
        songs_list.style.transitionDelay = "2.6s"
        document.getElementById("dropbox-title").style.transitionDelay= "2.6s";
        document.getElementById("box-title").style.transitionDelay= "2.6s";
        
        document.getElementById("song1").style.top = "-200px"
        document.getElementById("song2").style.top = "-200px"
        document.getElementById("song3").style.top = "-200px"
        document.getElementById("song4").style.top = "-200px"
        document.getElementById("song5").style.top = "-200px"
        document.getElementById("song6").style.top = "-200px"

        document.getElementById("dropbox-title").style.backgroundColor = "initial";
        document.getElementById("box-title").style.color = "black";

        document.getElementById("song2").style.opacity = "0"
        document.getElementById("song3").style.opacity = "0"
        document.getElementById("song1").style.opacity = "0"
        document.getElementById("song4").style.opacity = "0"
        document.getElementById("song5").style.opacity = "0"
        document.getElementById("song6").style.opacity = "0"

        songs_list.classList.remove("active");
})

function getSongs(ele){
     const clasname = ele.className;
     const newSong = document.querySelector(`.${clasname}`);
     const newIndex = newSong.getAttribute("data-index");
     
     SongsAdd.push(Songs[newIndex]); 
     songs_imageAdd.push(songs_image[newIndex]);
     songs_singerAdd.push(songs_singer[newIndex]);
     songs_titleAdd.push(songs_title[newIndex]);
}

revbtn.addEventListener('click', () =>{
  
    if(reverse_btn == 0){
        reverse_btn = -1;
        document.getElementById("rev").style.backgroundColor = "white";
    }
    else{
       reverse_btn = 0;
       document.getElementById("rev").style.backgroundColor = "#2571af";
    }
})

bwd.addEventListener('click', () =>{

    Count--;
    if(Count >= 0 && SongsAdd.length > 0 && songs_imageAdd.length > 0 &&  songs_singerAdd.length > 0 && songs_titleAdd.length > 0)
    {
       if(Count >= 0){
           logo.src = songs_imageAdd[Count];
           song.src = SongsAdd[Count];
           artist_name.innerHTML= songs_titleAdd[Count];
           document.getElementById("ply").src = "thumbnil/icons8-pause-button-50.png";
           title_name.innerHTML = songs_singerAdd[Count];
           ply.classList.add("active");
           logo.classList.add("pic");
           aud.play();
        }
        else{
           Count = SongsAdd.length-1;
           logo.src = songs_imageAdd[Count];
           song.src = SongsAdd[Count];
           document.getElementById("ply").src = "thumbnil/icons8-pause-button-50.png";
           artist_name.innerHTML= songs_titleAdd[Count];
           ply.classList.add("active");
           title_name.innerHTML = songs_singerAdd[Count];
           aud.play();
           logo.classList.add("pic");
        }
    }
    else{
        Count++;
        alert("You are at the end");
    }
})
fwd.addEventListener('click', ()=>{
    
    Count++;
    if(Count <= SongsAdd.length-1 && SongsAdd.length > 0 && songs_imageAdd.length > 0 &&  songs_singerAdd.length > 0 && songs_titleAdd.length > 0)
    {
        if(Count < Songs.length){
             logo.src = songs_imageAdd[Count];
             song.src = SongsAdd[Count];
             artist_name.innerHTML= songs_titleAdd[Count];
             document.getElementById("ply").src = "thumbnil/icons8-pause-button-50.png";
             title_name.innerHTML = songs_singerAdd[Count];
             ply.classList.add("active");
             logo.classList.add("pic");
             aud.play();
        }
        else{
            Count = 0;
            logo.src = songs_imageAdd[Count];
            song.src = SongsAdd[Count];
            document.getElementById("ply").src = "thumbnil/icons8-pause-button-50.png";
            artist_name.innerHTML= songs_titleAdd[Count];
            ply.classList.add("active");
            title_name.innerHTML = songs_singerAdd[Count];
            aud.play();
            logo.classList.add("pic");
        }
    }
    else{
        Count--;
        alert("Your Queue is Empty choose your songs");
    }

})
ply.addEventListener('click', ()=>{
    if(ply.classList.contains("active"))
    {
        aud.pause();
        document.getElementById("ply").src = "thumbnil/_Pngtree_vector_play_icon_4013730-removebg-preview.png";
        ply.classList.remove("active");
        logo.classList.remove("pic");
    }
    else{
       aud.play();
       document.getElementById("ply").src = "thumbnil/icons8-pause-button-50.png";
       ply.classList.add("active");
       logo.classList.add("pic");
    }

})

function ChangeprograsseBar(){
    aud.currentTime = prograssBar.value;
}

function UpdateprograsseBar()
{
    
    prograssBar.max = aud.duration;
    prograssBar.value = aud.currentTime;

    let current_M  = Math.floor(aud.currentTime / 60);
    let current_S = Math.floor(aud.currentTime % 60);
    
    if(current_S < 10){
        current_S = "0" + current_S;
    }
    document.getElementById("currentTime").innerHTML = "0" + current_M + ":" + current_S;

    let m  = Math.floor(aud.duration / 60);
    let s = Math.floor(aud.duration % 60);

    if(s < 10)
    {
        s = "0" + s;
    }
    document.getElementById("duration").innerHTML = "0" + m + ":" + s;
    
    if(Math.floor(aud.currentTime / 60) == Math.floor(aud.duration / 60) && Math.floor(aud.currentTime % 60) == Math.floor(aud.duration % 60) && Count == SongsAdd.length-1 && reverse_btn == 0)
    {
         Count = reverse_btn;
         logo.src = songs_imageAdd[Count];
         song.src = SongsAdd[Count];
         document.getElementById("ply").src = "thumbnil/icons8-pause-button-50.png";
         artist_name.innerHTML= songs_titleAdd[Count];
         ply.classList.add("active");
         title_name.innerHTML = songs_singerAdd[Count];
         aud.play();
         logo.classList.add("pic");
    }

    if(Math.floor(aud.currentTime / 60) == Math.floor(aud.duration / 60) && Math.floor(aud.currentTime % 60) == Math.floor(aud.duration % 60) && Count == SongsAdd.length-1)
    {
        logo.classList.remove('pic');
    }

    else if(Math.floor(aud.currentTime / 60) == Math.floor(aud.duration / 60) && Math.floor(aud.currentTime % 60) == Math.floor(aud.duration % 60))
    {
       Count++;
       logo.src = songs_imageAdd[Count];
       song.src = SongsAdd[Count];
       document.getElementById("ply").src = "thumbnil/icons8-pause-button-50.png";
       artist_name.innerHTML= songs_titleAdd[Count];
       ply.classList.add("active");
       title_name.innerHTML = songs_singerAdd[Count];
       aud.play();
       logo.classList.add("pic");
   }



}

setInterval(UpdateprograsseBar,1000);
UpdateprograsseBar();
