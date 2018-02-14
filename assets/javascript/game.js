//Global Variables
//================================================================
//Arrays and variables for holding data
var randomWordFood = ["ceviche","crepes", "dumplings", "fajitas" , "gnocchi" , "pasta" , "pizza" , "ramen" , "schnitzel" , "tacos"];
var selectedWord = "";
var lettersInWord = [];
var numberBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters =[];

//Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 0;

//Functions
function startGame () {
    selectedWord = randomWordFood[Math.floor(Math.random() * randomWordFood.length)];
    lettersInWord = selectedWord.split("");
    numberBlanks = lettersInWord.length;

    //Reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];
    
    //Putting words in the blanks
    for (var i = 0; i < numberBlanks; i++)
    {
        blanksAndSuccesses.push("_");
    }

    //Changing HTML
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;
    //Testing
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numberBlanks);
    console.log(blanksAndSuccesses);
}
function checkLetters(letter) {
    // Checks if letter exists in code
    var isLetterInWord = false;
    for (var i=0; i<numberBlanks; i++){
        if(selectedWord[i] == letter){
            isLetterInWord = true;
        }
    }
    //Check where in the word the letter it exists
    if (isLetterInWord){
        for (var i=0; i<numberBlanks; i++){
            if(selectedWord[i] == letter){
                blanksAndSuccesses[i] = letter;
            }
        }
    }
    else{
        wrongLetters.push(letter);
        numGuesses--
    }
}
//Main Process
//Starts the code for the first time
startGame();

//Registering keycode

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCas();
    console.log(letterGuessed);
}