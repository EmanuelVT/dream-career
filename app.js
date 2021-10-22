var body = document.querySelector("body");
var grayScreen = document.querySelector(".gray-screen");
var button = document.querySelector(".button");
var button2 = document.querySelector(".button-bottom");
var exitButton = document.querySelector(".lni-close");

button.addEventListener('click', event => {
    grayScreen.classList.add("active");
    body.classList.add("no-scroll")
});

button2.addEventListener('click', event => {
    grayScreen.classList.add("active");
    body.classList.add("no-scroll")
});

exitButton.addEventListener('click', event => {
    grayScreen.classList.remove("active");
    body.classList.remove("no-scroll");
});



// popUp.classList.add("active")
console.log(exitButton);