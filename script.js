var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementsByClassName("random");

function setGradient() {
    body.style.background =
        "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function randomColor() {
   return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function changeBackground(){
    color1.value = randomColor();
    color2.value = randomColor();
    setGradient();
}

randomButton[0].addEventListener("click", changeBackground);

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
