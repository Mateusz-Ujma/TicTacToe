const mainGame = document.querySelector('.game');
const playBtnOne = document.querySelector('.game-play-btn-oneP');
const playBtnTwo = document.querySelector('.game-play-btn-twoP');
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
let playerMove = true; // true == PlayerMove false == BotMove
let listEmptySlot = [];
let win = false;
let turnNumber=0;



playBtnOne.addEventListener('click', hidderBtnOne);
playBtnTwo.addEventListener('click', hidderBtnTwo);
resetBtn.addEventListener('click', resetGame);

function startSite() {
    whoseTurn.innerHTML = "";
    whoseTurn.classList.remove('sizer');
    whoseTurn.classList.remove('positioner');
    playBtnOne.classList.add('visible');
    playBtnTwo.classList.add('visible');
}

function switchTurn() {
    turn = !turn;
}

function hidderBtnOne() {
    playBtnOne.classList.remove('visible');
    playBtnTwo.classList.remove('visible');
    gameMode = true;
    setTimeout(playGame, 10);
}
function hidderBtnTwo() {
    playBtnOne.classList.remove('visible');
    playBtnTwo.classList.remove('visible');
    gameMode = false;
    setTimeout(playGame, 10);
}

function playGame() {
    sleep(200);
    mainGame.classList.add('visible');
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
    winLine.classList.remove('win-line-one');
    winLine.classList.remove('win-line-two');
    winLine.classList.remove('win-line-three');
    winLine.classList.remove('win-line-four');
    winLine.classList.remove('win-line-five');
    winLine.classList.remove('win-line-six');
    winLine.classList.remove('win-line-seven');
    winLine.classList.remove('win-line-eight');
    turnNumber=0;
    win = false;
    turn = true;
    playerMove = true;
    whoseTurn.innerHTML = "";
    whoseTurn.classList.remove('sizer');
    whoseTurn.classList.remove('positioner');
    winLine.classList.remove('visible');
    whoseTurnBg.classList.remove('visible');
    whoseTurnText.classList.remove('visible');
    resetBtn.classList.remove('visible');
    mainGame.classList.remove('visible');
    setTimeout(startSite, 100);
    gamePlace.forEach((square) => {
        square.innerHTML = "";
        square.classList.remove('non-clickable');
        square.classList.remove('circle');
        square.classList.remove('cross');
    });
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
        win = true;
    }
    else if (gamePlace[3].classList.contains('circle') && gamePlace[4].classList.contains('circle') && gamePlace[5].classList.contains('circle')) {
        //circleWinTwo
        winLine.classList.add('win-line-two');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        win = true;
    }
    else if (gamePlace[6].classList.contains('circle') && gamePlace[7].classList.contains('circle') && gamePlace[8].classList.contains('circle')) {
        //circleWinThree
        winLine.classList.add('win-line-three');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        win = true;
    }
    else if (gamePlace[0].classList.contains('circle') && gamePlace[3].classList.contains('circle') && gamePlace[6].classList.contains('circle')) {
        //circleWinFour
        winLine.classList.add('win-line-four');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        win = true;
    }
    else if (gamePlace[1].classList.contains('circle') && gamePlace[4].classList.contains('circle') && gamePlace[7].classList.contains('circle')) {
        //circleWinFive
        winLine.classList.add('win-line-five');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        win = true;
    }
    else if (gamePlace[2].classList.contains('circle') && gamePlace[5].classList.contains('circle') && gamePlace[8].classList.contains('circle')) {
        //circleWinSix
        winLine.classList.add('win-line-six');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        win = true;
    }
    else if (gamePlace[0].classList.contains('circle') && gamePlace[4].classList.contains('circle') && gamePlace[8].classList.contains('circle')) {
        //circleWinSeven
        winLine.classList.add('win-line-seven');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        win = true;
    }
    else if (gamePlace[2].classList.contains('circle') && gamePlace[4].classList.contains('circle') && gamePlace[6].classList.contains('circle')) {
        //circleWinEight
        winLine.classList.add('win-line-eight');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        win = true;
    }

    //Cross Win

    else if (gamePlace[0].classList.contains('cross') && gamePlace[1].classList.contains('cross') && gamePlace[2].classList.contains('cross')) {
        //circleWinOne
        winLine.classList.add('win-line-one');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        win = true;
    }
    else if (gamePlace[3].classList.contains('cross') && gamePlace[4].classList.contains('cross') && gamePlace[5].classList.contains('cross')) {
        //circleWinTwo
        winLine.classList.add('win-line-two');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        win = true;
    }
    else if (gamePlace[6].classList.contains('cross') && gamePlace[7].classList.contains('cross') && gamePlace[8].classList.contains('cross')) {
        //circleWinThree
        winLine.classList.add('win-line-three');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        win = true;
    }
    else if (gamePlace[0].classList.contains('cross') && gamePlace[3].classList.contains('cross') && gamePlace[6].classList.contains('cross')) {
        //circleWinFour
        winLine.classList.add('win-line-four');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        win = true;
    }
    else if (gamePlace[1].classList.contains('cross') && gamePlace[4].classList.contains('cross') && gamePlace[7].classList.contains('cross')) {
        //circleWinFive
        winLine.classList.add('win-line-five');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        win = true;
    }
    else if (gamePlace[2].classList.contains('cross') && gamePlace[5].classList.contains('cross') && gamePlace[8].classList.contains('cross')) {
        //circleWinSix
        winLine.classList.add('win-line-six');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        win = true;
    }
    else if (gamePlace[0].classList.contains('cross') && gamePlace[4].classList.contains('cross') && gamePlace[8].classList.contains('cross')) {
        //circleWinSeven
        winLine.classList.add('win-line-seven');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        win = true;
    }
    else if (gamePlace[2].classList.contains('cross') && gamePlace[4].classList.contains('cross') && gamePlace[6].classList.contains('cross')) {
        //circleWinEight
        winLine.classList.add('win-line-eight');
        gamePlace.forEach((square) => {
            square.classList.add('non-clickable');
        });
        win = true;
    }
    if(turnNumber==9){
        winText="DRAW!!";
        whoseTurn.classList.add('sizer');
        whoseTurn.classList.add('positioner');
        whoseTurn.innerHTML = winText;
        winLine.classList.add('visible');
        whoseTurnBg.classList.add('visible');
        whoseTurnText.classList.remove('visible');
        resetBtn.classList.add('visible');
    }
    else if (win) {
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
        whoseTurnText.classList.remove('visible');
        resetBtn.classList.add('visible');
    }
}

function placeSign() {
    if (gameMode) {
        if (turn && playerMove) {
            this.classList.add('circle');
            this.innerHTML = circle;
            this.classList.add('non-clickable');
            switchTurn();
            switchTextTurn();
            playerMove = true;
        }
        else if (!turn && playerMove) {
            this.classList.add('cross');
            this.innerHTML = cross;
            this.classList.add('non-clickable');
            switchTurn();
            switchTextTurn();
            playerMove = true;
        }
    }
    else if (!gameMode) {
        if (turn && playerMove) {
            this.classList.add('circle');
            this.innerHTML = circle;
            this.classList.add('non-clickable');
            switchTurn();
            switchTextTurn();
            playerMove = false;
            setTimeout(botPlayer, 100);
        }
        else if (!turn && playerMove) {
            this.classList.add('cross');
            this.innerHTML = cross;
            this.classList.add('non-clickable');
            switchTurn();
            switchTextTurn();
            playerMove = false;
            setTimeout(botPlayer, 100);
        }

    }
   

    turnNumber++;
    whoWin();
    
   

}

function botPlayer() {
    gamePlace.forEach((square) => {
        if (!square.classList.contains('non-clickable')) {
            listEmptySlot.push(square);
        }
    });
    if (!playerMove && !win) {
        let random = listEmptySlot[randomNumber(0, listEmptySlot.length - 1)];
        if (turn) {
            random.classList.add('circle');
            random.innerHTML = circle;
            random.classList.add('non-clickable');
            switchTurn();
            switchTextTurn();
            playerMove = true;
        }
        else {
            random.classList.add('cross');
            random.innerHTML = cross;
            random.classList.add('non-clickable');
            switchTurn();
            switchTextTurn();
            playerMove = true;
        }
    }
    turnNumber++;
    whoWin();
    listEmptySlot.length = 0;
}

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 