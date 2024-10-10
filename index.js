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
    let metersConv = parseFloat(inputEl.value) * 0.3048

    let gallonsConv = parseFloat(inputEl.value) * 0.264172
    let litersConv = parseFloat(inputEl.value) * 3.78541

    let poundsConv = parseFloat(inputEl.value) * 0.453592
    let kilosConv = parseFloat(inputEl.value) *  2.20462

    lengthStr = `${inputEl.value} meters = ${feetConv.toFixed(3)} feet | ${inputEl.value} feet = ${metersConv.toFixed(3)} meters`
    volumeStr = `${inputEl.value} liters = ${gallonsConv.toFixed(3)} gallons | ${inputEl.value} gallons = ${litersConv.toFixed(3)} liters`
    massStr = `${inputEl.value} kilos = ${poundsConv.toFixed(3)} pounds | ${inputEl.value} pounds = ${kilosConv.toFixed(3)} kilos`

    lengthEl.innerHTML = lengthStr
    volumeEl.innerHTML = volumeStr
    massEl.innerHTML = massStr
})