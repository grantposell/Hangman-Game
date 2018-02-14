var randomWordFood = ["ceviche","crepes", "dumplings", "fajitas" , "gnocchi" , "pasta" , "pizza" , "ramen" , "schnitzel" , "tacos"];
var randomWord = randomWordFood[Math.floor(Math.random() * randomWordFood.length)];

var f;
var count = 0;
var answerArray = [];

function startUp()
{
    for (var i = 0; i < randomWord.length; i++)
    {
        answerArray[i] = "_";
    }

    f = answerArray.join(" ");
    document.getElementById("answer").innerHTML = f;
}