let bulbIsOff = document.getElementById("bulbOff")
let bulbIsOn = document.getElementById("bulbOn")
let click = new Audio ("assets/sungjinwoo.mp3")

function onBtn (){
    bulbIsOn.style.display = "block"
    bulbIsOff.style.display = "none"
    click.play()
}
function offBtn (){
    bulbIsOn.style.display = "none"
    bulbIsOff.style.display = "block"
    click.play()
}