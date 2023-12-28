let randomnumber1 = Math.floor((Math.random() * 6) + 1);
let randomnumber2 = Math.floor((Math.random() * 6) + 1);

let randomDiceImage1 = "dice" + randomnumber1 + ".png";
let randomImageSource1 = "images/" + randomDiceImage1;

let randomDiceImage2 = "dice" + randomnumber2 + ".png";
let randomImageSource2 = "images/" + randomDiceImage2;

let image1 = document.querySelectorAll("img")[0];
let image2 = document.querySelectorAll("img")[1];


image1.setAttribute("src",randomImageSource1);
image2.setAttribute("src",randomImageSource2);

if(randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "Player1 Wins !!!";
}
else if(randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "Player2 Wins !!!";
}
else {
    document.querySelector("h1").innerHTML = "...Draw...";
}