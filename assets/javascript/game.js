// list all variables
// dom variables
var $wins = document.getElementById('wins')
var $loses = document.getElementById('loses')

// logical variables
var wins = 0
var loses = 0

$('#Wins').text(wins);
$('#Loses').text(loses);
// var randomNumber = []
// var totalScore = 0
var score = 0


// Need to select random start number each time the game starts
var randomNumber = Math.floor(Math.random() * 100 + 19)

// show the random number in the correct spot "goal"
$('#randomNumber').text(randomNumber);


// need to set up a random number for each crystal
var num1 = Math.floor(Math.random() * 11 + 1);
var num2 = Math.floor(Math.random() * 11 + 1);
var num3 = Math.floor(Math.random() * 11 + 1);
var num4 = Math.floor(Math.random() * 11 + 1);
$('#ruby').data("points", num1)
$('#diamond').data("points", num2)
$('#citrine').data("points", num3)
$('#emerald').data("points", num4)
function reset() {
    score = 0


    // Need to select random start number each time the game starts
    randomNumber = Math.floor(Math.random() * 100 + 19)

    // show the random number in the correct spot "goal"
    $('#randomNumber').text(randomNumber);


    // need to set up a random number for each crystal
    num1 = Math.floor(Math.random() * 11 + 1);
    num2 = Math.floor(Math.random() * 11 + 1);
    num3 = Math.floor(Math.random() * 11 + 1);
    num4 = Math.floor(Math.random() * 11 + 1);
    $('#ruby').data("points", num1)
    $('#diamond').data("points", num2)
    $('#citrine').data("points", num3)
    $('#emerald').data("points", num4)
}
// need to set up a listener for the click
// $('#ruby').on('click', function () {
//     score = score + num1;
//     console.log("total score= " + score);
//     $('#totalScore').text(score);

//     if (score == randomNumber) {
//         winner();
//     }
//     else if (score > randomNumber) {
//         loser();
//     }
// })

// add wins and losses to gamecount

function winner() {
    alert("Winner");
    wins++;
    $('#Wins').text(wins);
    reset();
}

function loser() {
    alert("You a loser!");
    loses++;
    $('#Loses').text(loses);
    reset()
}
// need to reset the game win or lose

// needs to show the total score





// set up click for crystals
$('.crystal').on('click', function () {
    // console.log(this.innerText)
    console.log($(this).attr("id"))
    console.log("WHERE IS IT!?")
    //console.log($(this).attr("data-factoid")) 
    let points = ($(this).data("points"))
    score = score + points;
    console.log("total score= " + score);
    $('#totalScore').text(score);

    if (score == randomNumber) {
        winner();
    }
    else if (score > randomNumber) {
        loser();
    }
})

// $('.crystal').on('click', sayHi)

// function sayHi() {
//     console.log('hello')
// }