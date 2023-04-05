console.log("Welcome to Beatles");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('mastePlay');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let masterSongInfo = document.getElementById('masterSongInfo');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [

    {songname: 'On-my-Way', filePath: "songs/1.mp3",coverPath: "covers/1.jpg"},
    {songname: 'Heat-Waves', filePath: "songs/2.mp3",coverPath: "covers/2.jpg"},
    {songname: 'Until-I-Found-You', filePath: "songs/3.mp3",coverPath: "covers/3.jpg"},
    {songname: 'Stay', filePath: "songs/4.mp3",coverPath: "covers/4.jpg"},
    {songname: 'Hymn-for-weekend', filePath: "songs/5.mp3",coverPath: "covers/5.jpg"},
    {songname: 'Night-Changes', filePath: "songs/6.mp3",coverPath: "covers/6.jpg"},
    {songname: 'Ola-ye-Kale-Kale', filePath: "songs/7.mp3",coverPath: "covers/7.jpg"},
    {songname: 'No-Lie', filePath: "songs/8.mp3",coverPath: "covers/8.jpg"},
    {songname: 'Industry-Baby', filePath: "songs/9.mp3",coverPath: "covers/9.jpg"},
    {songname: 'As-It-Was', filePath: "songs/10.mp3",coverPath: "covers/10.jpg"},

]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})

masterPlay.addEventListener('click', ()=>
{   
if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity = 1;
}
else{
    audioElement.pause();
    audioElement.remove('fa-pause');
    masterPlay.classList.add('fa-play');
    gif.style.opacity = 0 ;
}
})

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress;  
})
progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongInfo.innerText = songs[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1; 
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{

    if (songIndex>9) {

        songIndex = 0 ;
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongInfo.innerText = songs[songIndex].songname;        
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})


document.getElementById('previous').addEventListener('click', ()=>{
    if (songIndex<=0) {
        songIndex = 0 ;

    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongInfo.innerText = songs[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})