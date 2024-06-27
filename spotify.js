console.log("Spotify");
//Intializing variables
let songIndex=0;
let audioElement = new Audio('file:///C:/Users/HP/Pictures/store/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let previous=document.getElementById('previous');
let next=document.getElementById('next');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItems'));
let songItemsPlay=Array.from(document.getElementsByClassName('songItemsPlay'));
let gifName=document.getElementById('gifName');

let song=[
    {songName:"Humdard", filePath:"file:///C:/Users/HP/Pictures/store/1.mp3", coverPath:"file:///C:/Users/HP/Pictures/store/coverpage1.jpeg"},
    {songName:"Chahu Main Ya Nahin", filePath:"file:///C:/Users/HP/Pictures/store/2.mp3", coverPath:"file:///C:/Users/HP/Pictures/store/coverpage2.jpg"},
    {songName:"Dil ke Pass", filePath:"file:///C:/Users/HP/Pictures/store/3.mp3", coverPath:"file:///C:/Users/HP/Pictures/store/coverpage3.jpg"},
    {songName:"Shayad", filePath:"file:///C:/Users/HP/Pictures/store/4.mp3", coverPath:"file:///C:/Users/HP/Pictures/store/coverpage4.jpeg"},
    {songName:"Kuch to Hain", filePath:"file:///C:/Users/HP/Pictures/store/5.mp3", coverPath:"file:///C:/Users/HP/Pictures/store/coverpage5.jpeg"},
]
//Handle Play/Pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused ||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//Litsen to Events
audioElement.addEventListener('timeupdate',()=>
{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = song[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = song[i].songName;
})

songItemsPlay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add("fa-pause-circle");
        audioElement.src = `file:///C:/Users/HP/Pictures/store/${index+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        gifName.innerText=song[index].songName;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemsPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
})
}

previous.addEventListener('click',()=>{
    if(index <= 0){
        index = 0;
        gifName.innerText = song[index].songName;
    }
    else{
        index-= 1;
        gifName.innerText = song[index].songName;
    }
    makeAllPlays();
    audioElement.src = `file:///C:/Users/HP/Pictures/store/${index+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    songItemsPlay[index].classList.remove('fa-play-circle');
    songItemsPlay[index].classList.add("fa-pause-circle");
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    })

    next.addEventListener('click',()=>{
        if(index >= 5){
            index = 0;
            gifName.innerText = song[index].songName;
        }
        else{
            index+= 1;
            gifName.innerText = song[index].songName;
        }
        makeAllPlays();
        gifName.innerText = song[index].songName
        audioElement.src = `file:///C:/Users/HP/Pictures/store/${index+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        songItemsPlay.index.remove('fa-play-circle');
        songItemsPlay.index.add("fa-pause-circle");
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        })