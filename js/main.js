const mainGame = document.querySelector('.game');
const playBtn = document.querySelector('.game-play-btn');
const playBtnText = document.querySelector('.game-play-btn-text');
const circle = "<p class=\"sign circle text-shadow-win\"><i class=\"fa-regular fa-circle \"></i></p>";
const cross = "<p class=\"sign cross text-shadow-win\"><i class=\"fa-solid fa-x\"></i></p>";
const circleOpacity = "<i class=\"fa-regular fa-circle shadow\"></i>";
const crossOpacity = "<i class=\"fa-solid fa-x shadow\"></i>";
const gamePlace = document.querySelectorAll('.game-square');
const whoseTurn = document.querySelector('.game-whose-turn');
const winLine = document.querySelector('.game-win-line');
const whoseTurnText = document.querySelector('.game-whose-turn-text');
const whoseTurnBg = document.querySelector('.game-whose-turn-bg');
const resetBtn = document.querySelector('.game-reset-btn');


let turn = true; //true == O false == X
let winText = '';
let gameMode = false; // true == OnePlayer false == TwoPlayer



resetBtn.classList.add('not-visible');
playBtn.addEventListener('click', hidderBtn);
resetBtn.addEventListener('click', resetGame);

function switchTurn() {
    turn = !turn;
}



function hidderBtn() {
    playBtn.classList.add('not-visible');
    playBtnText.classList.add('not-visible');
    playBtn.classList.remove('visible');
    playBtnText.classList.remove('visible');

    setTimeout(playGame, 100);
}

function playGame() {
    sleep(200);
    mainGame.classList.add('visible');
    mainGame.classList.remove('not-visible');
    whoseTurnText.classList.add('visible');
    if (gameMode) {
        gamePlace.forEach((square) => {
            square.addEventListener('click', placeSign);
        });

    }
    else {
        gamePlace.forEach((square) => {
            square.addEventListener('click', placeSign);
        });

    }

}
function resetGame() {
    whoseTurn.innerHTML = "";
}

function sleep(miliseconds) {
    var currentTime = new Date().getTime();

    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}

function switchTextTurn() {
    let turnSign = "";
    if (turn) {
        turnSign = "<i class=\"fa-regular fa-circle \"></i>";
    }
    else {
        turnSign = "<i class=\"fa-solid fa-x\"></i>";
    }

    whoseTurnText.innerHTML = "TURN " + turnSign;
}

function whoWin() {
    if (!turn) {
        winText = 'CIRCLE WIN!!';
    }
    else {
        winText = 'CROSS WIN!!';
    }
    whoseTurn.classList.add('sizer');
    whoseTurn.classList.add('positioner');
    whoseTurn.innerHTML = winText;
    winLine.classList.add('visible');
    whoseTurnBg.classList.add('visible');
    whoseTurnText.classList.add('not-visible');
    resetBtn.classList.add('visible');
    resetBtn.classList.add('clickable');
    resetBtn.classList.remove('not-visible');

}

function placeSign() {
    if (turn) {
        this.classList.add('circle');
        this.innerHTML = circle;
        this.classList.add('non-clickable');
        switchTurn();
        switchTextTurn();
    }
    else {
        this.classList.add('cross');
        this.innerHTML = cross;
        this.classList.add('non-clickable');
        switchTurn();
        switchTextTurn();
    }

    // 0-1-2
    // 3-4-5
    // 6-7-8

    // Circle Win  

    if (gamePlace[0].classList.contains('circle') && gamePlace[1].classList.contains('circle') && gamePlace[2].classList.contains('circle')) {
        //circleWinOne
        winLine.classList.add('win-line-one');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        whoWin();
    }
    else if (gamePlace[3].classList.contains('circle') && gamePlace[4].classList.contains('circle') && gamePlace[5].classList.contains('circle')) {
        //circleWinTwo
        winLine.classList.add('win-line-two');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        whoWin();
    }
    else if (gamePlace[6].classList.contains('circle') && gamePlace[7].classList.contains('circle') && gamePlace[8].classList.contains('circle')) {
        //circleWinThree
        winLine.classList.add('win-line-three');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        whoWin();
    }
    else if (gamePlace[0].classList.contains('circle') && gamePlace[3].classList.contains('circle') && gamePlace[6].classList.contains('circle')) {
        //circleWinFour
        winLine.classList.add('win-line-four');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        whoWin();
    }
    else if (gamePlace[1].classList.contains('circle') && gamePlace[4].classList.contains('circle') && gamePlace[7].classList.contains('circle')) {
        //circleWinFive
        winLine.classList.add('win-line-five');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        whoWin();
    }
    else if (gamePlace[2].classList.contains('circle') && gamePlace[5].classList.contains('circle') && gamePlace[8].classList.contains('circle')) {
        //circleWinSix
        winLine.classList.add('win-line-six');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        whoWin();
    }
    else if (gamePlace[0].classList.contains('circle') && gamePlace[4].classList.contains('circle') && gamePlace[8].classList.contains('circle')) {
        //circleWinSeven
        winLine.classList.add('win-line-seven');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        whoWin();
    }
    else if (gamePlace[2].classList.contains('circle') && gamePlace[4].classList.contains('circle') && gamePlace[6].classList.contains('circle')) {
        //circleWinEight
        winLine.classList.add('win-line-eight');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        whoWin();
    }

    //Cross Win

    else if (gamePlace[0].classList.contains('cross') && gamePlace[1].classList.contains('cross') && gamePlace[2].classList.contains('cross')) {
        //circleWinOne
        winLine.classList.add('win-line-one');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        whoWin();
    }
    else if (gamePlace[3].classList.contains('cross') && gamePlace[4].classList.contains('cross') && gamePlace[5].classList.contains('cross')) {
        //circleWinTwo
        winLine.classList.add('win-line-two');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        whoWin();
    }
    else if (gamePlace[6].classList.contains('cross') && gamePlace[7].classList.contains('cross') && gamePlace[8].classList.contains('cross')) {
        //circleWinThree
        winLine.classList.add('win-line-three');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        whoWin();
    }
    else if (gamePlace[0].classList.contains('cross') && gamePlace[3].classList.contains('cross') && gamePlace[6].classList.contains('cross')) {
        //circleWinFour
        winLine.classList.add('win-line-four');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        whoWin();
    }
    else if (gamePlace[1].classList.contains('cross') && gamePlace[4].classList.contains('cross') && gamePlace[7].classList.contains('cross')) {
        //circleWinFive
        winLine.classList.add('win-line-five');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        whoWin();
    }
    else if (gamePlace[2].classList.contains('cross') && gamePlace[5].classList.contains('cross') && gamePlace[8].classList.contains('cross')) {
        //circleWinSix
        winLine.classList.add('win-line-six');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        whoWin();
    }
    else if (gamePlace[0].classList.contains('cross') && gamePlace[4].classList.contains('cross') && gamePlace[8].classList.contains('cross')) {
        //circleWinSeven
        winLine.classList.add('win-line-seven');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        whoWin();
    }
    else if (gamePlace[2].classList.contains('cross') && gamePlace[4].classList.contains('cross') && gamePlace[6].classList.contains('cross')) {
        //circleWinEight
        winLine.classList.add('win-line-eight');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        whoWin();
    }
}