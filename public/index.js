let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let rimage = "dice" + randomNumber1 + ".png";

let rimagesrc = "./images/" + rimage;

let imageflip = document.querySelectorAll("img")[0];

imageflip.setAttribute("src", rimagesrc);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let rimage2 = "dice" + randomNumber2 + ".png";

let rimagesrc2 = "./images/" + rimage2;

let imageflip2 = document.querySelectorAll("img")[1];

imageflip2.setAttribute("src", rimagesrc2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!..";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!..";
} else if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!...";
}
