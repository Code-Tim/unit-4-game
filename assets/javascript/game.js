// list all variables
// dom variables
var $wins = document.getElementById('wins')
var $loses = document.getElementById('loses')

// logical variables
var wins = 0
var loses = 0

$('#numberWins').text(wins);
$('#numberLoses').text(loses);
// var randomNumber = []
var totalScore = 0
var score = 0


// Need to select random start number each time the game starts
var randomNumber = Math.floor(Math.random() * 100)

// show the random number in the correct spot "goal"
$('#randomNumber').text(randomNumber);


// need to set up a random number for each crystal
var num1 = Math.floor(Math.random() * 11 + 1);
var num2 = Math.floor(Math.random() * 11 + 1);
var num3 = Math.floor(Math.random() * 11 + 1);
var num4 = Math.floor(Math.random() * 11 + 1);

// need to set up a listener for the click
$('#ruby').on('click', function () {
    score = score + num1;
    console.log("total score= " + score);
    $('#totalScore').text(score);

    if (score == randomNumber) {
        winner();
    }
    else if (score > randomNumber) {
        loser();
    }
})

// add wins and losses to gamecount

function winner() {
    alert("Winner");
    wins++;
    $('#numberWins').text(wins);
    reset();
}

function loser() {
    alert("You a loser!");
    loses++;
    $('#numberLoses').text(loses);
    reset()
}
// need to reset the game win or lose

// needs to show the total score





// set up click for crystals
$('.crystal').on('click', function () {
    // console.log(this.innerText)
    console.log($(this).attr("id"))
    // console.log($(this).attr("data-factoid"))
    // console.log($(this).data("factoid"))
})


// $('.crystal').on('click', sayHi)

// function sayHi() {
//     console.log('hello')
// }