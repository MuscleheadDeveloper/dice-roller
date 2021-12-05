//first dice
var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) +1;

var randomImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomImage;
document.querySelector(".img1").setAttribute("src", randomImageSource);

//Second Dice
var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) +1;

var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomImage2;
document.querySelector(".img2").setAttribute("src", randomImageSource2);

//Player1 wins
if(randomNumber1 > randomNumber2){
    var winner = document.querySelector("h1").innerHTML = "Player1 Wins";
    console.log(winner);
}
else if(randomNumber1 < randomNumber2){
    var winner = document.querySelector("h1").innerHTML = "Player2 Wins";
}
else if(randomNumber2 === randomNumber1){
    var winner = document.querySelector("h1").innerHTML = "It Issa Tie";
}

//Taking h1 back to Refresh me
refresh = () => {
    var back = document.querySelector("h1").innerHTML = "Refresh Loser😂";
}

