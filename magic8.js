var myQuestion = prompt("Ask the magic 8 ball a yes or no question.")

var randomAnswer = Math.floor(Math.random() * 5)
function magic(randomAnswer){
    if (randomAnswer === 0){
        alert("Better not tell you now")
    }
    else if (randomAnswer === 1){
        alert("It is decidededly so.")
    }
    else if (randomAnswer === 2) {
        alert("Don't count on it")
    }
    
}
magic(randomAnswer)

// var 1 = alert("Better not tell you now")
// var 2 = alert("It is decidededly so.")
// var 3 = alert("Don't count on it")
// var 4 = alert("Signs point to yes!")
// var 5 = alert("Outlook not so good...")
