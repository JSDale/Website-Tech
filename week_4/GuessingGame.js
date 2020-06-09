var randomNumber;
var numberOfGuesses = 0;

function Main()
{
    alert("active");
    randomNumber = Math.round(Math.random()* (20-0) + 0);
}

function EnterGuess()
{
    var guess = parseInt(document.getElementById("guess").value);
    NumberCompare(guess);
}

function NumberCompare(guess)
{
    if(guess > randomNumber)
    {
        document.getElementById("NumberCompareResult").innerHTML = "Lower";
        NumberOfGuesses();
    }
    else if(guess < randomNumber)
    {
        document.getElementById("NumberCompareResult").innerHTML = "Higher";
        NumberOfGuesses();
    }
    else
    {
        document.getElementById("NumberCompareResult").innerHTML = "Correct!";
    }
}
function NumberOfGuesses()
{
    numberOfGuesses = numberOfGuesses + 1;
    document.getElementById("numberOfGuesses").innerHTML = numberOfGuesses;
}