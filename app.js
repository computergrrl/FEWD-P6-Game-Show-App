//GLOBAL VARIABLES 
const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const buttonStart = document.querySelector(".btn__reset");
buttonStart.style.cursor = "pointer";
let missed = 0;

//Remove overlay and start game

buttonStart.addEventListener("click", () => {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
  startGame();

});

//function to play audio on certain button clicks
function playAudio(x) {
  x.play();
}

//create empty array to store used values
let array2 = [];


function getRandomMovie() {
  //Choose a random phrase
  let random = Math.floor(Math.random() * (moviesAndSounds.length));
  let movie = moviesAndSounds[random];
  //remove movie title from array after selected and push it to another array
  let remove = moviesAndSounds.splice(random, 1);
  array2.push(remove[0]);
  //once all movies have been used, reset the array
  if (moviesAndSounds.length === 0) {
    moviesAndSounds = array2;
    array2 = [];
  }
  return movie;
}

let movie; 

function pairMovieWithSounds() {
  movie = getRandomMovie(); 
  console.log(movie.title);
  return movie.sounds;
}



function randomSounds(movieObject) {
  let sounds = movieObject.sounds;
  let random = Math.floor(Math.random() * (sounds.length));
  let audio = sounds[random];
  audio.play();
}

function startGame() {
  pairMovieWithSounds();
  randomSounds(movie);
}
/*start game function will need:

pairMovieWithSounds();
randomSounds(movie);


Sound hint button will = randomSounds(movie);
*/