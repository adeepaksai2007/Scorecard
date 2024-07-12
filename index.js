let home = document.getElementById("home");
let guest = document.getElementById("guest");
let newgame = document.getElementById("newgame");
console.log(home);
console.log(guest);
console.log(newgame)

let homeScore = 0
let guestScore = 0
function add1home(){
    homeScore+=1
    home.textContent=homeScore
}
function add2home(){
    homeScore+=2
    home.textContent=homeScore
}
function add3home(){
    homeScore+=3
    home.textContent=homeScore
}
function add1guest(){
    guestScore+=1
    guest.textContent=guestScore
}
function add2guest(){
    guestScore+=2
    guest.textContent=guestScore
}
function add3guest(){
    guestScore+=3
    guest.textContent=guestScore
}


function reset(){
    homeScore=0
    guestScore=0
    guest.textContent=guestScore
    home.textContent=homeScore
}