//Remove overlay and start game
buttonStart.addEventListener("click", () => {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
  startGame();

});

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

  //remove sounds from array after they're played
  let remove = sounds.splice(random, 1);
  array3.push(remove[0]);

  //once all sounds have been used, reset the array
  if (sounds.length === 0) {
    movieObject.sounds = array3;
    array3 = [];
  }

}

//event listener to play a random movie sound from the chosen movie
soundHint.addEventListener("click", () => {
  randomSounds(movie);
});


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
  }
}

/* function for handling letter clicks -- shows the correct letters in the 
phrase and adds appropriate classes to the keyboard letters */
function gamePlay(letter) {
  if (checkLetter(letter)) {
    showLetterInPhrase(letter);
    correctLetter(letter);
    correct.push(letter);
    checkForWin();
  } else if (!checkLetter(letter)) {
    incorrectLetter(letter);
    missed += 1;
    removeHearts();
    checkForLose();
  }
}


function showLetterInPhrase(letter) {
  for (let letters of theLetters) {
    if (letters.textContent == letter) {
      letters.className = "show letter";
    }
  }
}

//handle correct letter guess
function correctLetter(letter) {
  for (let key of keyboard) {
    if (key.textContent == letter) {
      key.classList.add("chosen");
      key.disabled = true;
    }
  }
}

//handle incorrect letter guess
function incorrectLetter(letter) {
  for (let key of keyboard) {
    if (key.textContent == letter) {
      key.classList.add("wrong");
      key.disabled = "true";
    }
  }
}

//function to reset all the things before a new game starts
function resetGame() {
  phrase.innerHTML = " ";
  missed = 0;
  correct = [];
  resetHearts();
  startGame();

}

newgame.addEventListener("click", () => {
    resetGame();
  }

);

//this loop sets the keyboard letters up for initial gameplay
for (let letters of keyboard) {
  letters.addEventListener("click", (e) => {
    let letter = e.target.textContent;
    gamePlay(letter);
  });
}

//this method returns an array of all the unique letters in the phrase
function getUniqueLetters() {
  const getUnique = new Set(movieTitleToArray()); //create an object of unique letters
  const unique = [...getUnique]; //turn above object back into an array
  return unique;
}

function checkForWin() {
  if (spaceTester() && correct.length == getUniqueLetters().length - 1) {
    console.log("You win the game with spaces")
  } else if(!spaceTester() && correct.length == getUniqueLetters().length) {
    console.log("You win the game with no spaces")
  }
}

function checkForLose() {
  if (missed === 5 || missed > 4) {
    console.log("You lose!");
  }
}

//remove a heart from the scoreboard
function removeHearts() {
  let index = missed - 1; //set an index variable to use on lives array
  const source = "images/lostHeart.png";
  lives[index].src = source; //set the next heart (starting at zero index) to the new src image)
}

//reset the hearts on the scoreboard
function resetHearts() {
  let source = "images/liveHeart.png";
  for (let life of lives) {
    life.src = source;
  }
}

//function to test for whether there are spaces in the phrase
function spaceTester() {
  if (getUniqueLetters().includes(" ")) {
    return true;
  } else {
    return false;
  }

}