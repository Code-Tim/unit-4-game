$('.crystal').on('click', function () {
    console.log(this.innerText)
    console.log($(this).attr("id"))
    console.log($(this).attr("data-factoid"))
    console.log($(this).data("factoid"))
})


// $('.crystal').on('click', sayHi)

// function sayHi() {
//     console.log('hello')
// }