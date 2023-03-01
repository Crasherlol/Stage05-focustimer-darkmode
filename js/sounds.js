export function sounds() {

function forestCardOff(){
    document.querySelector(".forestCard").classList.remove("hide")
    document.querySelector(".forestCardOn").classList.add("hide")
}

function cafeteriaCardOff(){
    document.querySelector(".cafeteriaCard").classList.remove("hide")
    document.querySelector(".cafeteriaCardOn").classList.add("hide")
}

function lareiraCardOff(){
    document.querySelector(".lareiraCard").classList.remove("hide")
    document.querySelector(".lareiraCardOn").classList.add("hide")
}

function rainCardOff(){
    document.querySelector(".rainCard").classList.remove("hide")
    document.querySelector(".rainCardOn").classList.add("hide")

}

function forestCardOn(){
    document.querySelector(".forestCard").classList.add("hide")
    document.querySelector(".forestCardOn").classList.remove("hide")
    document.querySelector(".forestCardOn").classList.add("buttonOn")
}

function cafeteriaCardOn(){
    document.querySelector(".cafeteriaCard").classList.add("hide")
    document.querySelector(".cafeteriaCardOn").classList.remove("hide")
}

function rainCardOn(){
    document.querySelector(".rainCard").classList.add("hide")
    document.querySelector(".rainCardOn").classList.remove("hide")
}

function lareiraCardOn(){
    document.querySelector(".lareiraCard").classList.add("hide")
    document.querySelector(".lareiraCardOn").classList.remove("hide")
}

    return {
        forestCardOff, cafeteriaCardOff, lareiraCardOff, rainCardOff, forestCardOn, cafeteriaCardOn, rainCardOn, lareiraCardOn
    }
}