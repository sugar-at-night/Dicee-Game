var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// set dynamic path 
var srcPath1 = "images/dice" + randomNumber1 + ".png";
var srcPath2 = "images/dice" + randomNumber2 + ".png";

// select by class, then set attribute
document.querySelectorAll("img")[0].setAttribute("src", srcPath1);
document.querySelectorAll("img")[1].setAttribute("src", srcPath2);

//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
