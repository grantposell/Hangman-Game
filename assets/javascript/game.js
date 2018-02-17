//Global Variables
//================================================================
//Arrays and variables for holding data
var randomWordFood = ["ceviche","crepes", "dumplings", "fajitas" , "gnocchi" , "pasta" , "pizza" , "ramen" , "schnitzel" , "tacos"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var lettersGuessed =[];

//Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

//Functions
function startGame () {
    selectedWord = randomWordFood[Math.floor(Math.random() * randomWordFood.length)];
    
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;
    console.log(numBlanks)
    

    //Reset
    guessesLeft = 9;
    lettersGuessed = [];
    blanksAndSuccesses = [];
    
    //Putting words in the blanks
    for (var i = 0; i < numBlanks; i++)
    {
        blanksAndSuccesses.push("_");
    }

    //Changing HTML
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

}

function checkLetters(letter) {
    // Checks if letter exists in code
    
    console.log(lettersGuessed)
    var isLetterInWord = false;
    var letterGuessed = false;

    for (var i=0; i<lettersGuessed.length; i++){
        if(lettersGuessed[i] === letter){
            letterGuessed = true;
        }
    }
    if(!letterGuessed){
        lettersGuessed.push(letter);
        for (var i=0; i<numBlanks; i++){
            if(selectedWord[i] === letter){
                isLetterInWord = true;
            }
        }

        //Check where in the word the letter it exists
        if (isLetterInWord){
            for (var i=0; i<numBlanks; i++){
                if(selectedWord[i] == letter){
                    blanksAndSuccesses[i] = letter;
                }
            }
        }
        else{
            guessesLeft--;
        }
    } else {
        console.log('Guess again')
    }
}

function roundComplete(){
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount +  "| Guesses Left " + guessesLeft);
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join(" ");
    //Check if user won
    if (lettersInWord.join("") == blanksAndSuccesses.join("")) {
        winCount++;
        alert("You Won!");

        //Update win counter
        document.getElementById("winCounter").innerHTML = winCount;
        
        startGame();
    }
    else if (guessesLeft == 0) {
        lossCount++;
        alert("You lost!");

        document.getElementById("lossCounter").innerHTML = lossCount;

        startGame();
    }
}

//Main Process
//Starts the code for the first time
startGame();

//Registering keycode

document.onkeyup = function(event) {
    var lettersGuessed = event.key.toLowerCase();
    console.log(lettersGuessed)
    checkLetters(lettersGuessed);
    roundComplete();



}