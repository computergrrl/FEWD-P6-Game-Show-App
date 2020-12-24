let movies = [
    "The Princess Bride", 
    "The Big Lebowski",
    "Top Gun",
    "Die Hard",
    "Breakfast Club",
    "Short Circuit",
];

//variables and arrays for sounds
const disappointment = document.getElementById("disappointment");
const inconceivable = document.getElementById("inconceivable");
const jesus = document.getElementById("jesus");
const myname = document.getElementById("myname");
const wrongguy = document.getElementById("wrongguy");

// let bigL = [
//   jesus, 
//   wrongguy,
// ];

// let princess = [
//   disappointment, 
//   inconceivable,
//   myname,
// ];

let moviesAndSounds = [
  {title: "The Big Lebowski", sounds: [jesus, wrongguy]},
  {title: "The Princess Bride" , sounds: [disappointment, inconceivable, myname]},
];