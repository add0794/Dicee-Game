document.query

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var img1Element = document.querySelector(".img1");
img1Element.setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var img2Element = document.querySelector(".img2");
img2Element.setAttribute("src", "images/dice" + randomNumber2 + ".png");

var title = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    title.textContent = "Player 1 wins!";
  } else if (randomNumber1 < randomNumber2) {
    title.textContent = "Player 2 wins!";
} else {
    title.textContent = "It's a tie!";
}
  