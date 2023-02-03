let homeRes = document.querySelector('.score-home')
let guestRes = document.querySelector('.score-guest')

let scoreHome = 0
let scoreGuest = 0

//home score
function addHome1(){
    scoreHome += 1
    homeRes.innerHTML = scoreHome
    win()
}
function addHome2(){
    scoreHome += 2
    homeRes.innerHTML = scoreHome
    win()
}
function addHome3(){
    scoreHome += 3
    homeRes.innerHTML = scoreHome
    win()
}

//Guest score
function addGuest1(){
    scoreGuest += 1
    guestRes.innerHTML = scoreGuest
    win()
}
function addGuest2(){
    scoreGuest += 2
    guestRes.innerHTML = scoreGuest
    win()
}
function addGuest3(){
    scoreGuest += 3
    guestRes.innerHTML = scoreGuest
    win()
}

//restart
function restart(){
    scoreHome = 0
    scoreGuest = 0
    homeRes.innerHTML = scoreHome
    guestRes.innerHTML = scoreGuest
    win()
}

//win leader
function win(){
    if(scoreHome > scoreGuest){
        homeRes.classList.add('win')
        if(guestRes.classList.contains('win')){
            guestRes.classList.remove('win')
        }
    }
    if(scoreHome < scoreGuest){
        guestRes.classList.add('win')
        if(homeRes.classList.contains('win')){
            homeRes.classList.remove('win')
        }
    }
    if(scoreHome == scoreGuest){
        if(guestRes.classList.contains('win')){
            guestRes.classList.remove('win')
        }
        if(homeRes.classList.contains('win')){
            homeRes.classList.remove('win')
        }
    }
}