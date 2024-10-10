let inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-conv-string")
const volumeEl = document.getElementById("volume-conv-string")
const massEl = document.getElementById("mass-conv-string")

let lengthStr = ""
let volumeStr = ""
let massStr = ""





btnEl.addEventListener("click", function(){
    
    let feetConv = parseFloat(inputEl.value) * 3.28084
    let metersConv = parseFloat(inputEl.value) / 3.0

    lengthStr = `${inputEl.value} meters = ${feetConv.toFixed(3)} feet | ${inputEl.value} feet = ${metersConv.toFixed(3)} meters`

    lengthEl.innerHTML = lengthStr
    volumeEl.innerHTML = volumeStr
    massEl.innerHTML = massStr
})