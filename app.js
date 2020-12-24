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


});

//function to play audio on certain button clicks
function playAudio(x) {
  x.play();
}

//create empty array to store used values
let array2 = [];


function getRandomMovie() {

  //Choose a random phrase
  let random = Math.floor(Math.random() * (movies.length));
  let movie = movies[random];

  //remove movie title from array after selected and push it to another array
  let remove = movies.splice(random, 1);
  array2.push(remove[0]);

  //once all movies have been used, reset the array
  if (movies.length === 0) {
    movies = array2;
    array2 = [];
  }

  return movie.toLowerCase();
}


function pairMovieWithSounds() {
  let movieTitle = getRandomMovie();
  console.log(movieTitle);
  //let val;

  switch (movieTitle.includes(val)) {
    case "princess":
      playAudio(disappointment);
      break;
    case "lebowski":
      playAudio(wrongguy);
      break;
    default:
      console.log("No movie found with this value");
  }
}

/*
Add a button to the page for sound effect

Add an event listener to the button that plays the sound effect that goes with that movie
  - Figure out a way to identify the phrase
  - match the phrase to the sound
     (Switch loop?)





*/