let $ = document

// let heartIconElem = $.querySelector('.heartIcon')
// let heartIconElem2 = $.querySelector('.heartIcon2')
let audioElem = $.querySelector('.audio')
let playIconElem = $.querySelector('.playIcon')
let pauseIconElem = $.querySelector('.pauseIcon')
let singerNameElem = $.querySelector('.singerName')
let songNameElem = $.querySelector('.songName')
let coverElem = $.querySelector('.cover')
let nextElem = $.querySelector('.next')
let previousElem = $.querySelector('.previous')


let musicsInfo = [
    {
        src: 'media/chasing.mp3',
        songName: 'chasing',
        singerName: 'NF',
        cover: 'img/chasing.jfif',
        
    },
    {
        src: 'media/Hold Me While You Wait.mp3',
        songName: 'Hold Me While You Wait',
        singerName: 'Lewis capaldi',
        cover: 'img/holdMe.jfif',
       
    },
    {
        src: 'media/my_mind_me.mp3',
        songName: 'my mind',
        singerName: 'selena Gomez',
        cover: 'img/myMind.jfif',

    },
]
let audioIndex = 0


playIconElem.addEventListener('click', play)
pauseIconElem.addEventListener('click', pause)
nextElem.addEventListener('click', next)
previousElem.addEventListener('click', previous)
// heartIconElem2.addEventListener('click', solidHeart)
// heartIconElem.addEventListener('click', completeHeart)



//play

function play() {
    audioElem.play()
    playIconElem.style.display = 'none'
    pauseIconElem.style.display = 'block'


}


//pause
function pause() {
    audioElem.pause()
    pauseIconElem.style.display = 'none'
    playIconElem.style.display = 'block'

}


//heart icon

// function solidHeart() {
//     heartIconElem.style.display = 'block'
//     heartIconElem2.style.display = 'none'

    
// }
// function completeHeart() {
//     heartIconElem.style.display = 'none'
//     heartIconElem2.style.display = 'block'
    
// }


//next

function next() {

    audioIndex++


    if (audioIndex > musicsInfo.length - 1) {
        audioIndex = 0
    }
    audioElem.src = musicsInfo[audioIndex].src
    songNameElem.innerHTML = musicsInfo[audioIndex].songName
    singerNameElem.innerHTML = musicsInfo[audioIndex].singerName
    coverElem.src = musicsInfo[audioIndex].cover
    play()

}

//previous
function previous() {

    audioIndex--


    if (audioIndex < 0) {
        audioIndex = 2
    }
    audioElem.src = musicsInfo[audioIndex].src
    songNameElem.innerHTML = musicsInfo[audioIndex].songName
    singerNameElem.innerHTML = musicsInfo[audioIndex].singerName
    coverElem.src = musicsInfo[audioIndex].cover
    play()

}


