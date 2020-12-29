//GLOBAL VARIABLES 
const keyboard = document.querySelectorAll("#qwerty button");
const phrase = document.querySelector("#phrase ul");
const buttonStart = document.querySelector(".btn__reset");
const theLetters = document.getElementsByClassName("letter");
buttonStart.style.cursor = "pointer";
const soundHint = document.getElementById("soundHint");
const newgame = document.getElementById("newgame");
let missed = 0;
let movie;

//Remove overlay and start game
buttonStart.addEventListener("click", () => {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
  startGame();

});

//event listener to play a random movie sound from the chosen movie
soundHint.addEventListener("click", () => {
  randomSounds(movie);
});

//create empty array to store used values
let array2 = [];


function getRandomMovie() {
  //Choose a random phrase
  let random = Math.floor(Math.random() * (moviesAndSounds.length));
  let movie = moviesAndSounds[random];
  //remove movie from array after selected and push it to another array
  let remove = moviesAndSounds.splice(random, 1);
  array2.push(remove[0]);
  //once all movies have been used, reset the array
  if (moviesAndSounds.length === 0) {
    moviesAndSounds = array2;
    array2 = [];
  }
  return movie;
}

/*This function sets the "movie" variable to random movie object
 then returns the sounds array asscociated w/ that object */
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

//this function calls all the functions needed to start a new game
function startGame() {
  pairMovieWithSounds();
  randomSounds(movie);
  addPhraseToDisplay();
  keyboardSetup();
}

//function breaks movie title into an array of letters
function movieTitleToArray() {
  let string = movie.title.toLowerCase();
  return string.split("");
}

//function adds the movie title to the "board" for gameplay
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

//function that checks if letter is in the phrase
function checkLetter(letter) {
  if (movieTitleToArray().includes(letter)) {
    return true;
  } else {
    return false;
  }
}

/* function that sets up the keyboard at the beginning of each game and
adds event listeners to all the letter keys */
function keyboardSetup() {
  for (let letters of keyboard) {
    letters.classList.remove("chosen", "wrong");
    letters.disabled = false;
    // letters.addEventListener("click", (e) => {
    //   let letter = e.target.textContent;
    //   gamePlay(letter);
    // });
  }
} 

// function testEventListener(e) {
//   for (let letters of keyboard) {
//       let letter = e.target.textContent;
//       gamePlay(letter);
//     });
//   }
// }

/* function for handling letter clicks, showing the correct letters in the 
phrase and adding appropriate classes to the keyboard letters */
function gamePlay(letter) {
  if (checkLetter(letter)) {
    showLetterInPhrase(letter);
    correctLetter(letter);
  } else if (!checkLetter(letter)) {
    incorrectLetter(letter);
    missed += 1;
  }
}

function showLetterInPhrase(letter) {
  for (let letters of theLetters) {
    if (letters.textContent == letter) {
      letters.className = "show letter";
    }
  }
}

function correctLetter(letter) {
  for (let key of keyboard) {
    if (key.textContent == letter) {
      key.classList.add("chosen");
    }
  }
}

function incorrectLetter(letter) {
  for (let key of keyboard) {
    if (key.textContent == letter) {
      key.classList.add("wrong");
    }
  }
}

function resetGame() {
  phrase.innerHTML = " ";
  missed = 0;
  startGame();
  //reset lives here somewhere;
}

newgame.addEventListener("click", () => {
    resetGame();
  }

);

for (let letters of keyboard) {
  letters.addEventListener("click", (e) => {
    let letter = e.target.textContent;
    gamePlay(letter);
  });
}