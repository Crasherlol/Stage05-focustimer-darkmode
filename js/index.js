
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let cardOne = document.querySelector('.forestCard')
let cardTwo = document.querySelector('.rainCard')
let cardThree = document.querySelector('.cafeteriaCard')
let cardFour = document.querySelector('.lareiraCard')

let cardOneNight = document.querySelector('.forestCardNight')
let cardTwoNight = document.querySelector ('.rainCardNight')
let cardThreeNight = document.querySelector('.cafeteriaCardNight')
let cardFourNight = document.querySelector('.lareiraCardNight')


const cafeteriaSound = new  Audio("audio/Cafeteria.wav");  
const forestSound = new  Audio("audio/Floresta.wav"); 
const chuvaSound = new  Audio("audio/Chuva.wav");  
const lareiraSound = new  Audio("audio/Lareira.wav");  

let addTime = document.querySelector('.plusTime')
let play = document.querySelector('.play')
let stop = document.querySelector('.stop')
let minusTime = document.querySelector('.minusTime')

let addTimeNight = document.querySelector('.plusTimeNight')
let playNight = document.querySelector('.playNight')
let stopNight = document.querySelector('.stopNight')
let minusTimeNight = document.querySelector('.minusTimeNight')




let darkModeButton = document.querySelector('.dayTime')
let lightModeButton = document.querySelector('.nightTime')

let timerTimeout
function countdown(){
    timerTimeout = setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        if (seconds <= 0)
        {
            seconds = 60
            minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
        }

        secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
        
        if (minutes <= 0){
            return
        }
        
        countdown()
        
    }, 1000)

}

play.addEventListener('click', function()
{
    countdown()
})

playNight.addEventListener('click', function()
{
    countdown()
})


stop.addEventListener('click', function(){
    clearTimeout(timerTimeout)
    
})

stopNight.addEventListener('click', function(){
    clearTimeout(timerTimeout)
    
})

addTime.addEventListener('click', function(){
   addTimer()
    
})

addTimeNight.addEventListener('click', function(){
    addTimer()
     
 })
minusTime.addEventListener('click', function(){
    minusTimer()
})

minusTimeNight.addEventListener('click', function(){
    minusTimer()
})

function addTimer(){
    let minutes = Number(minutesDisplay.textContent)
    minutesDisplay.textContent = String(minutes + 5).padStart(2, "0")

}

function minusTimer (){
    let minutes = Number(minutesDisplay.textContent)
    minutesDisplay.textContent = String(minutes - 5).padStart(2, "0")
}

function forestCardOff(){
    document.querySelector(".forestCard").classList.remove("hide")
    document.querySelector(".forestCardOn").classList.add("hide")
    document.querySelector(".forestCardNight").classList.remove("hide")
    document.querySelector(".forestCardNightOn").classList.add("hide")
}

function cafeteriaCardOff(){
    document.querySelector(".cafeteriaCard").classList.remove("hide")
    document.querySelector(".cafeteriaCardOn").classList.add("hide")
    document.querySelector(".cafeteriaCardNight").classList.remove("hide")
    document.querySelector(".cafeteriaCardNightOn").classList.add("hide")
}

function lareiraCardOff(){
    document.querySelector(".lareiraCard").classList.remove("hide")
    document.querySelector(".lareiraCardOn").classList.add("hide")
    document.querySelector(".lareiraCardNight").classList.remove("hide")
    document.querySelector(".lareiraCardNightOn").classList.add("hide")
}

function rainCardOff(){
    document.querySelector(".rainCard").classList.remove("hide")
    document.querySelector(".rainCardOn").classList.add("hide")
    document.querySelector(".rainCardNight").classList.remove("hide")
    document.querySelector(".rainCardNightOn").classList.add("hide")

}

function forestCardOn(){
    document.querySelector(".forestCard").classList.add("hide")
    document.querySelector(".forestCardOn").classList.remove("hide")
    document.querySelector(".forestCardNight").classList.add("hide")
    document.querySelector(".forestCardNightOn").classList.remove("hide")
    
}

function cafeteriaCardOn(){
    document.querySelector(".cafeteriaCard").classList.add("hide")
    document.querySelector(".cafeteriaCardOn").classList.remove("hide")
    document.querySelector(".cafeteriaCardNight").classList.add("hide")
    document.querySelector(".cafeteriaCardNightOn").classList.remove("hide")
}

function rainCardOn(){
    document.querySelector(".rainCard").classList.add("hide")
    document.querySelector(".rainCardOn").classList.remove("hide")
    document.querySelector(".rainCardNight").classList.add("hide")
    document.querySelector(".rainCardNightOn").classList.remove("hide")
}

function lareiraCardOn(){
    document.querySelector(".lareiraCard").classList.add("hide")
    document.querySelector(".lareiraCardOn").classList.remove("hide")
    document.querySelector(".lareiraCardNight").classList.add("hide")
    document.querySelector(".lareiraCardNightOn").classList.remove("hide")
}
function soundOff(soundOne, soundTwo, soundThree){
    soundOne.pause()
    soundTwo.pause()
    soundThree.pause()
}

cardOne.addEventListener('click', function(){
    soundOff(chuvaSound, cafeteriaSound, lareiraSound)

    rainCardOff()
    cafeteriaCardOff()
    lareiraCardOff()

    forestCardOn()
    forestSound.play()
    
})

cardOneNight.addEventListener('click', function(){
    soundOff(chuvaSound, cafeteriaSound, lareiraSound)
    rainCardOff()
    cafeteriaCardOff()
    lareiraCardOff()
    forestCardOn()
    forestSound.play()
})

cardTwo.addEventListener('click', function(){
    soundOff(forestSound, cafeteriaSound, lareiraSound)

    forestCardOff()
    cafeteriaCardOff()
    lareiraCardOff()

    rainCardOn()
    chuvaSound.play()
})
cardTwoNight.addEventListener('click', function(){
    soundOff(forestSound, cafeteriaSound, lareiraSound)

    forestCardOff()
    cafeteriaCardOff()
    lareiraCardOff()

    rainCardOn()
    chuvaSound.play()
})

cardThree.addEventListener('click', function(){
    soundOff(chuvaSound, forestSound, lareiraSound)

    forestCardOff()
    rainCardOff()
    lareiraCardOff()

    cafeteriaCardOn()
    cafeteriaSound.play()
   
    
})
cardThreeNight.addEventListener('click', function(){
    soundOff(chuvaSound, forestSound, lareiraSound)

    forestCardOff()
    rainCardOff()
    lareiraCardOff()

    cafeteriaCardOn()
    cafeteriaSound.play()
   
    
})


cardFour.addEventListener('click', function(){
    soundOff(chuvaSound, cafeteriaSound, forestSound)
    forestCardOff()
    rainCardOff()
    cafeteriaCardOff()

    lareiraCardOn()
    lareiraSound.play()
  
})
cardFourNight.addEventListener('click', function(){
    soundOff(chuvaSound, cafeteriaSound, forestSound)
    forestCardOff()
    rainCardOff()
    cafeteriaCardOff()

    lareiraCardOn()
    lareiraSound.play()
  
})

darkModeButton.addEventListener('click', function(){
    document.querySelector('body').classList.add("dark-mode")
    document.querySelector('.dayTime').classList.add("hide")
    document.querySelector('.nightTime').classList.remove("hide")
    document.querySelector('.buttons-lightmode').classList.add("hide")
    document.querySelector('.buttons-nightmode').classList.remove("hide")
    document.querySelector ('.sons').classList.add("hide")
    document.querySelector ('.sons-nightTime').classList.remove("hide")
})

lightModeButton.addEventListener('click', function(){
    document.querySelector('body').classList.remove("dark-mode")
    document.querySelector('.dayTime').classList.remove("hide")
    document.querySelector('.nightTime').classList.add("hide")
    document.querySelector('.buttons-lightmode').classList.remove("hide")
    document.querySelector('.buttons-nightmode').classList.add("hide")
    document.querySelector ('.sons').classList.remove("hide")
    document.querySelector ('.sons-nightTime').classList.add("hide")
})



let forestVolume = document.querySelector(".forestSliderOn");
forestVolume.addEventListener("change", function(e) {
forestSound.volume = e.currentTarget.value / 100;
})

let lareiraVolume = document.querySelector(".lareiraSliderOn");
lareiraVolume.addEventListener("change", function(e) {
lareiraSound.volume = e.currentTarget.value / 100;
})

let cafeteriaVolume = document.querySelector(".cafeteriaSliderOn");
cafeteriaVolume.addEventListener("change", function(e) {
cafeteriaSound.volume = e.currentTarget.value / 100;
})

let rainVolume = document.querySelector(".rainSliderOn");
rainVolume.addEventListener("change", function(e) {
chuvaSound.volume = e.currentTarget.value / 100;
})

let forestVolumeNight = document.querySelector(".forestSliderNightOn");
forestVolumeNight.addEventListener("change", function(e) {
forestSound.volume = e.currentTarget.value / 100;
})

let rainVolumeNight = document.querySelector(".rainSliderNightOn");
rainVolumeNight.addEventListener("change", function(e) {
chuvaSound.volume = e.currentTarget.value / 100;
})

let cafeteriaVolumeNight = document.querySelector(".cafeteriaSliderNightOn");
cafeteriaVolumeNight.addEventListener("change", function(e) {
cafeteriaSound.volume = e.currentTarget.value / 100;
})

let lareiraVolumeNight = document.querySelector(".lareiraSliderNightOn");
lareiraVolumeNight.addEventListener("change", function(e) {
lareiraSound.volume = e.currentTarget.value / 100;
})

















