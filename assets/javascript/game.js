var letters =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var losses =0;
var guessesLeft = 10;
var computerGuess = generateRandomComputerGuess();

document.getElementById('wins').innerHTML = ('wins: ' + wins);
document.getElementById('losses').innerHTML = ('losses: ' + losses);
document.getElementById('guessesLeft').innerHTML = ('Guesses Left: ' + guessesLeft);

document.onkeyup = function(keyEvent) {
    var userGuess = String.fromCharCode(keyEvent.keyCode).toLowerCase();

if (userGuess == computerGuess) {
        wins++;
        computerGuess = generateRandomComputerGuess();
        guessesleft = 10;
    }
     else {
             losses++;
             guessesLeft--;
         }

    if (guessesLeft == 0){
        document.write("GAME OVER!")
    }
    console.log(computerGuess);
    console.log("userguess" + userGuess);
    console.log("wins" + wins);
    console.log("losses" + losses);

}

function generateRandomComputerGuess (){
    var randomNumber = Math.random() * letters.length
    var randomIndex = Math.floor(randomNumber);
    var computerGuess = letters[randomIndex];
    return(computerGuess);
  }
