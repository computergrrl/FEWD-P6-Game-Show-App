//GLOBAL VARIABLES 
const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const startGame = document.querySelector(".btn__reset");
startGame.style.cursor = "pointer";
let missed = 0;


//Remove overlay and start game

startGame.addEventListener("click" , () => {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none"

});