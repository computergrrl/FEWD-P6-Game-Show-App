//GLOBAL VARIABLES 
const keyboard = document.querySelectorAll("#qwerty button");
const phrase = document.querySelector("#phrase ul");
const buttonStart = document.querySelector(".btn__reset");
const overlay = document.getElementById("overlay");
const title = document.querySelector("#title");
const theLetters = document.getElementsByClassName("letter");
buttonStart.style.cursor = "pointer";
const soundHint = document.getElementById("soundHint");
const lives = document.querySelectorAll("#scoreboard ol li img");
let missed = 0;
let movie;
let message;
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
const asianamerican = document.getElementById("asianamerican");
const foronereason = document.getElementById("foronereason");
const myworldnow = document.getElementById("myworldnow");
const outtahere = document.getElementById("outtahere");
const peedonrug = document.getElementById("peedonrug");
const priceiswrong = document.getElementById("priceiswrong");
const tapitin = document.getElementById("tapitin");

//create empty arrays to store used values
let array2 = [];
let array3 = [];

let moviesAndSounds = [
  {title: "The Big Lebowski", sounds: [asianamerican, peedonrug], soundwin: abides, soundlose: wrongguy, },
  {title: "The Princess Bride" , sounds: [myname, cantcompete,], soundwin: inconceivable, soundlose: disappointment,},
  {title: "Ghostbusters", sounds: [dontcross, majorappliance,], soundwin: keymaster, soundlose: backoff,},
  {title: "Star Wars A New Hope", sounds: [droidsyourlooking, helpme,], soundwin: forcewithyou, soundlose: suffer,},
  {title: "Happy Gilmore", sounds: [foronereason, myworldnow, tapitin, ], soundwin: outtahere, soundlose: priceiswrong, }
  
];