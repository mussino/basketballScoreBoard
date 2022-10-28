let homePoints = document.getElementById('home-score-point');
let guestPoints = document.getElementById('guest-score-point')
let scoreHome = 0;
let scoreGuest = 0;


function addHome1() {
    let result = scoreHome += 1;
    homePoints.textContent = result;
    console.log('Click button');
}

function addHome2() {
    let result = scoreHome += 2;
    homePoints.textContent = result;
    console.log('Click button');
}

function addHome3() {
    let result = scoreHome += 3;
    homePoints.textContent = result;
    console.log('Click button');
}


function addGuest1() {
    let result = scoreGuest += 1;
    guestPoints.textContent = result;
    console.log('Click button');
}

function addGuest2() {
    let result = scoreGuest += 2;
    guestPoints.textContent = result;
    console.log('Click button');
}

function addGuest3() {
    let result = scoreGuest += 3;
    guestPoints.textContent = result;
    console.log('Click button');
}



function newGame() {
    console.log('Click on Button')
    homePoints.textContent = 0;
    guestPoints.textContent = 0;
    scoreHome = 0;
    scoreGuest = 0;
}