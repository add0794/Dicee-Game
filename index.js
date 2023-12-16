document.query

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Choose a random number for dice 1
var img1Element = document.querySelector(".img1"); 
img1Element.setAttribute("src", "images/dice" + randomNumber1 + ".png"); // Access dice 1 and change its image randomly

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Choose a random number for dice 2
var img2Element = document.querySelector(".img2");
img2Element.setAttribute("src", "images/dice" + randomNumber2 + ".png"); // Access dice 2 and change its image randomly

var title = document.querySelector("h1"); // Change the title "Refresh Me" based on which dice has the higher number

if (randomNumber1 > randomNumber2) { 
    title.textContent = "Player 1 wins!";
  } else if (randomNumber1 < randomNumber2) {
    title.textContent = "Player 2 wins!";
} else {
    title.textContent = "It's a tie!";
} 
  