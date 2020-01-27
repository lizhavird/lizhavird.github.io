// alert ("good morning!")
var treasureLocation= Math.floor(Math.random()* 11 )
var bombLocation= Math.floor(Math.random()* 11 )
var counter = 4


function revealChar(loc){

    counter = counter - 1

    if (counter<=0){
        alert("😿😿😿Bunny got lost for too long.....😿😿😿 GAME OVER. Play again?")
        location.reload()
    }

    document.getElementById("counter").innerHTML= `You have ${ counter } tries left.`
    if (loc===treasureLocation){
        document.getElementById(loc).innerHTML="🌈"
        setTimeout(function(){
            alert("🌈You found the Happy Place!🌈 Play again?")}, 300) //}, 10000) is auto reloading out after 10 milli sec.
        setTimeout(function(){location.reload()},300)

    } else if(loc === bombLocation){
        document.getElementById(loc).innerHTML="💣"
        setTimeout(function(){
            alert("💣💥 x__x 💣💥, GAME OVER. Play again?")}, 300) // Use this site  for refference https://www.w3schools.com/jsref/met_win_settimeout.asp
        setTimeout(function(){location.reload()},300)
    } else {
        document.getElementById(loc).innerHTML="🌲"
    }


//Disables multiple clicks on same square on table.
    document.getElementById(loc).onclick = function() {
        //disabled
        this.disabled = true;
    }
}
