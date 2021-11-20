const toggle_button = document.getElementById("toggle_button")
const toggle_text = document.getElementById("toggle_text")
const toggle_button_circle = document.getElementById("toggle_button_circle")
const hammer = document.getElementById("hammer")
const key = document.getElementById("key")
const explosion = document.getElementById("explosion")
const main = document.getElementsByTagName("main")[0]
const img = document.getElementById("lamp")
toggle_button_circle.style.transition = "0.2s";


let toggle_verify = "off";
let situation

toggle_button.addEventListener("click", toggle)
hammer.addEventListener("click", hammerBroke)
key.addEventListener("click", fixLamp)


function toggle() {


    if (toggle_verify == "on") {
        img.src = "./assets/lampadadesligada.png"
        toggle_button.style.backgroundColor = "white";
        toggle_text.style.left = "60%";
        toggle_text.innerHTML = "OFF"
        toggle_button_circle.style.left = "0"
        toggle_button.style.backgroundColor = "grey";
        toggle_text.style.color = "black";
        toggle_verify = "off"
        situation = "turnedoff"
        main.style.backgroundImage = "url('./assets/background.jpg')";

    }
    else if (toggle_verify == "off") {
        img.src = "./assets/lampadaligada.png"
        toggle_button.style.backgroundColor = "lightgreen";
        toggle_text.style.left = "15%";
        toggle_text.style.color = "green";
        toggle_text.innerHTML = "ON"
        toggle_button_circle.style.left = "50%"
        toggle_verify = "on"
        situation = "turnedon"
        main.style.backgroundImage = "url('./assets/backgroundlight.jpg')";

    }
}

function hammerBroke() {

    img.src = "./assets/lampadaquebrada.png"
    toggle_verify = "broked"
    toggle_button.style.backgroundColor = "white";
    toggle_text.style.left = "60%";
    toggle_text.innerHTML = "OFF"
    toggle_button_circle.style.left = "0"
    toggle_button.style.backgroundColor = "grey";
    toggle_text.style.color = "black";
    explosion.style.display = "block"
    situation = "broked"
    main.style.backgroundImage = "url('./assets/background.jpg')";
}

function fixLamp() {
    if (situation == "broked")
        img.src = "../assets/lampadadesligada.png"
    toggle_verify = "off"
    situation = "turnedoff"
    explosion.style.display = "none"

}