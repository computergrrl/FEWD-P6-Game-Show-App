//GLOBAL VARIABLES 
const keyboard = document.querySelectorAll("#qwerty button");
const phrase = document.querySelector("#phrase ul");
const buttonStart = document.querySelector(".btn__reset");
buttonStart.style.cursor = "pointer";
const soundHint = document.getElementById("soundHint");
let missed = 0;
let movie;

//Remove overlay and start game

buttonStart.addEventListener("click", () => {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
  startGame();

});

soundHint.addEventListener("click", () => {
  randomSounds(movie);
});

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

//This function sets the movie variable to random movie object then returns the sounds array asscociated w/ that object
function pairMovieWithSounds() {
  movie = getRandomMovie();
  return movie.sounds;
}

//this function picks a random sound from the movie's sound array and plays it
function randomSounds(movieObject) {
  let sounds = movieObject.sounds;
  let random = Math.floor(Math.random() * (sounds.length));
  let audio = sounds[random];
  audio.play();
}

function startGame() {
  pairMovieWithSounds();
  randomSounds(movie);
  addPhraseToDisplay();
  keyboardSetup();
}

function movieTitleToArray() {
  let string = movie.title.toLowerCase();
  return string.split("");
}

function addPhraseToDisplay() {
  let array = movieTitleToArray();

  for (let letters of array) {
    if (letters == " ") {
      phrase.innerHTML += `<li class="space">${letters}</li>`
    } else {
      phrase.innerHTML += `<li class="letter">${letters}</li>`
    }

  }

}

function checkLetter(letter) {
  if (movieTitleToArray().includes(letter)) {
    return true;
  } else {
    return false;
  }
}

function keyboardSetup () {
  for (let letters of keyboard) {
    letters.classList.remove("chosen", "wrong");
    letters.disabled = false;
    letters.addEventListener("click" , (e) => {
      let letter = e.target.textContent;
      console.log(letter);
      checkLetter(letter);
    });
  }
}

/*start game function will need:

pairMovieWithSounds();
randomSounds(movie);


Sound hint button will = randomSounds(movie);
*/