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
let correct = [];


//variables and arrays for sounds
const disappointment = document.getElementById("disappointment");
const inconceivable = document.getElementById("inconceivable");
const myname = document.getElementById("myname");
const wrongguy = document.getElementById("wrongguy");
const abides = document.getElementById("abides");
const backoff = document.getElementById("backoff");
const cantcompete = document.getElementById("cantcompete");
const dontcross = document.getElementById("dontcross");
const keymaster = document.getElementById("keymaster");
const majorappliance = document.getElementById("majorappliance");
const helpme = document.getElementById("helpme");
const suffer = document.getElementById("suffer");
const droidsyourlooking = document.getElementById("droidsyourlooking");
const force = document.getElementById("forcewithyou");
//create empty arrays to store used values
let array2 = [];
let array3 = [];

let moviesAndSounds = [
  {title: "The Big Lebowski", sounds: [abides, wrongguy]},
  {title: "The Princess Bride" , sounds: [disappointment, inconceivable, cantcompete,]},
  {title: "Ghostbusters", sounds: [backoff, dontcross, keymaster, majorappliance,]},
  {title: "Star Wars A New Hope", sounds: [suffer, droidsyourlooking, helpme, forcewithyou,]},
  
];