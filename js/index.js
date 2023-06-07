//named import
import { Timer } from "./timer.js"

import { Controls } from "./controls.js"

import { elements } from "./elements.js"

import Sound from "./sounds.js"



//Desestruturação de objeto
const {
    buttonPause,buttonPlay,buttonSet,buttonSoundOff,buttonSoundOn,buttonStop,minutesDisplay,secondsDisplay
} = elements

//Função factory
const controls = Controls({
    buttonPlay,buttonPause,buttonSet,buttonStop
})

const configTimer = {
    minutesDisplay,
    secondsDisplay,
    resetControls : controls.reset
}
const timer = Timer(configTimer)

const sound = Sound()

buttonPlay.addEventListener("click" , function() {
    controls.play()
    timer.countDown()
    sound.pressButton()
})

buttonPause.addEventListener("click" , function() {
    controls.pause()
    timer.hold()
    sound.pressButton()
})

buttonStop.addEventListener("click", function() {
    controls.reset()
    timer.reset()
    sound.pressButton()
})

buttonSoundOn.addEventListener("click" , function(){
    buttonSoundOn.classList.add("hide")
    buttonSoundOff.classList.remove("hide")
    sound.bgAudio.pause()
})

buttonSoundOff.addEventListener("click" , function(){
    buttonSoundOn.classList.remove("hide")
    buttonSoundOff.classList.add("hide")
    sound.bgAudio.play()
})

buttonSet.addEventListener("click", function() {
    let newMinutes = controls.getMinutes()

    if(!newMinutes){
        timer.reset()
        return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
})


