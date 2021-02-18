var gridBoxes = document.querySelectorAll('.grid-box');

var xWinningPossibilities = new Array(8).fill(0);
// these are [[0]-horizontal1, [1]-horizontal2, [2]-horizontal3, [3]-vertical1, [4]-vertical2, [5]-vertical3, [6]-diagonal1, [7]-diagonal2]
var oWinningPossibilities = new Array(8).fill(0);
var turnCounter = 0;

var invincibleBtn = document.querySelector('.invincible')
var twoPlayerBtn = document.querySelector('.two-player')
var patheticBtn = document.querySelector('.pathetic')
var gameMode = 'invincible';


function handleUserSelection(event) {
    if (event.currentTarget.textContent === '') {
        if (turnCounter % 2 === 0) {
            event.currentTarget.textContent = 'x'
            if (event.currentTarget === gridBoxes[0]) {
                xWinningPossibilities[0]++
                xWinningPossibilities[3]++
                xWinningPossibilities[6]++
            }
            else if (event.currentTarget === gridBoxes[1]) {
                xWinningPossibilities[0]++
                xWinningPossibilities[4]++
            }
            else if (event.currentTarget === gridBoxes[2]) {
                xWinningPossibilities[0]++
                xWinningPossibilities[5]++
                xWinningPossibilities[7]++
            }
            else if (event.currentTarget === gridBoxes[3]) {
                xWinningPossibilities[1]++
                xWinningPossibilities[3]++
            }
            else if (event.currentTarget === gridBoxes[4]) {
                xWinningPossibilities[1]++
                xWinningPossibilities[4]++
                xWinningPossibilities[6]++
                xWinningPossibilities[7]++
            }
            else if (event.currentTarget === gridBoxes[5]) {
                xWinningPossibilities[1]++
                xWinningPossibilities[5]++
            }
            else if (event.currentTarget === gridBoxes[6]) {
                xWinningPossibilities[2]++
                xWinningPossibilities[3]++
                xWinningPossibilities[7]++
            }
            else if (event.currentTarget === gridBoxes[7]) {
                xWinningPossibilities[2]++
                xWinningPossibilities[4]++
            }
            else {
                xWinningPossibilities[2]++
                xWinningPossibilities[5]++
                xWinningPossibilities[6]++
            }
        } 
        else {
            event.currentTarget.textContent = 'o'
            if (event.currentTarget === gridBoxes[0]) {
                oWinningPossibilities[0]++
                oWinningPossibilities[3]++
                oWinningPossibilities[6]++
            }
            else if (event.currentTarget === gridBoxes[1]) {
                oWinningPossibilities[0]++
                oWinningPossibilities[4]++
            }
            else if (event.currentTarget === gridBoxes[2]) {
                oWinningPossibilities[0]++
                oWinningPossibilities[5]++
                oWinningPossibilities[7]++
            }
            else if (event.currentTarget === gridBoxes[3]) {
                oWinningPossibilities[1]++
                oWinningPossibilities[3]++
            }
            else if (event.currentTarget === gridBoxes[4]) {
                oWinningPossibilities[1]++
                oWinningPossibilities[4]++
                oWinningPossibilities[6]++
                oWinningPossibilities[7]++
            }
            else if (event.currentTarget === gridBoxes[5]) {
                oWinningPossibilities[1]++
                oWinningPossibilities[5]++
            }
            else if (event.currentTarget === gridBoxes[6]) {
                oWinningPossibilities[2]++
                oWinningPossibilities[3]++
                oWinningPossibilities[7]++
            }
            else if (event.currentTarget === gridBoxes[7]) {
                oWinningPossibilities[2]++
                oWinningPossibilities[4]++
            }
            else {
                oWinningPossibilities[2]++
                oWinningPossibilities[5]++
                oWinningPossibilities[6]++
            }
        }
        if (checkForWin() != "result!") {
            turnCounter++
            checkForDraw()
            if (gameMode === 'pathetic') {
                patheticBotMoves();
            }
            if (gameMode === 'invincible') {
                invincibleBotMoves();
            }
        }
    }
} 

function patheticBotMoves() {
    if (gridBoxes[1].textContent === '') {
        gridBoxes[1].textContent = 'o'
        oWinningPossibilities[0]++
        oWinningPossibilities[4]++
    }
    else if (gridBoxes[7].textContent === '') {
        gridBoxes[7].textContent = 'o'
        oWinningPossibilities[2]++
        oWinningPossibilities[4]++
    }
    else if (gridBoxes[5].textContent === '') {
        gridBoxes[5].textContent = 'o'
        oWinningPossibilities[1]++
        oWinningPossibilities[5]++
    }
    else if (gridBoxes[3].textContent === '') {
        gridBoxes[3].textContent = 'o'
        oWinningPossibilities[1]++
        oWinningPossibilities[3]++
    }
    else if (gridBoxes[0].textContent === '') {
        gridBoxes[0].textContent = 'o'
        oWinningPossibilities[0]++
        oWinningPossibilities[3]++
        oWinningPossibilities[6]++

    }
    else if (gridBoxes[8].textContent === '') {
        gridBoxes[8].textContent = 'o'
        oWinningPossibilities[2]++
        oWinningPossibilities[5]++
        oWinningPossibilities[6]++
    }
    else if (gridBoxes[2].textContent === '') {
        gridBoxes[2].textContent = 'o'
        oWinningPossibilities[0]++
        oWinningPossibilities[5]++
        oWinningPossibilities[7]++
    }
    else if (gridBoxes[6].textContent === '') {
        gridBoxes[6].textContent = 'o'
        oWinningPossibilities[2]++
        oWinningPossibilities[3]++
        oWinningPossibilities[7]++
    }
    checkForWin();
    turnCounter++;
}

function invincibleBotMoves() {
    if (turnCounter === 1) {
        invincibleFirstMove()
    } else if (invincibleWinGame()) {
    } else if (invincibleBlockX()) {
    } else if (turnCounter === 3) {
        invincibleSecondMove()
    } else {invincibleTowardsDraw()
    }   
    checkForWin();
    turnCounter++;
}

function invincibleFirstMove() {
    var xMoveIndicator = 0
    xWinningPossibilities.forEach(function (winoptions) {
        xMoveIndicator = xMoveIndicator + winoptions
    })
    if (xMoveIndicator === 3 || xMoveIndicator === 2) {
        gridBoxes[4].textContent = 'o'
        oWinningPossibilities[1]++
        oWinningPossibilities[4]++
        oWinningPossibilities[6]++
        oWinningPossibilities[7]++
        }
    else {
        gridBoxes[0].textContent = 'o'
        oWinningPossibilities[0]++
        oWinningPossibilities[3]++
        oWinningPossibilities[6]++
    }
}

function invincibleSecondMove() {
    var xMoveIndicator = 0
    xWinningPossibilities.forEach(function (winoptions) {
        xMoveIndicator = xMoveIndicator + winoptions
    })
    if (xMoveIndicator === 6 && gridBoxes[4].textContent === 'o') {
        gridBoxes[1].textContent = 'o'
        oWinningPossibilities[0]++
        oWinningPossibilities[4]++ 
    } else {
        invincibleTowardsDraw()
    }
}

function invincibleWinGame() {
    if (oWinningPossibilities[0] === 2 && xWinningPossibilities[0] === 0) {
        if (gridBoxes[0].textContent === '') {
            gridBoxes[0].textContent = 'o'
            oWinningPossibilities[0]++
            oWinningPossibilities[3]++
            oWinningPossibilities[6]++
        }
        else if (gridBoxes[1].textContent === '') {
            gridBoxes[1].textContent = 'o'
            oWinningPossibilities[0]++
            oWinningPossibilities[4]++
        }
        else {
            gridBoxes[2].textContent = 'o'
            oWinningPossibilities[0]++
            oWinningPossibilities[5]++
            oWinningPossibilities[7]++
        }
    return true
    }
    else if (oWinningPossibilities[1] === 2 && xWinningPossibilities[1] === 0) {
        if (gridBoxes[3].textContent === '') {
            gridBoxes[3].textContent = 'o'
            oWinningPossibilities[1]++
            oWinningPossibilities[3]++
        }
        else if (gridBoxes[4].textContent === '') {
            gridBoxes[4].textContent = 'o'
            oWinningPossibilities[1]++
            oWinningPossibilities[4]++
            oWinningPossibilities[6]++
            oWinningPossibilities[7]++
        }
        else {
            gridBoxes[5].textContent = 'o'
            oWinningPossibilities[1]++
            oWinningPossibilities[5]++
        }
    return true
    }
    else if (oWinningPossibilities[2] === 2 && xWinningPossibilities[2] === 0) {
        if (gridBoxes[6].textContent === '') {
            gridBoxes[6].textContent = 'o'
            oWinningPossibilities[2]++
            oWinningPossibilities[3]++
            oWinningPossibilities[7]++
        }
        else if (gridBoxes[7].textContent === '') {
            gridBoxes[7].textContent = 'o'
            oWinningPossibilities[2]++
            oWinningPossibilities[4]++
        }
        else {
            gridBoxes[8].textContent = 'o'
            oWinningPossibilities[2]++
            oWinningPossibilities[5]++
            oWinningPossibilities[6]++
        }
    return true
    }
    else if (oWinningPossibilities[3] === 2 && xWinningPossibilities[3] === 0) {
        if (gridBoxes[0].textContent === '') {
            gridBoxes[0].textContent = 'o'
            oWinningPossibilities[0]++
            oWinningPossibilities[3]++
            oWinningPossibilities[6]++
        }
        else if (gridBoxes[3].textContent === '') {
            gridBoxes[3].textContent = 'o'
            oWinningPossibilities[1]++
            oWinningPossibilities[3]++
        }
        else {
            gridBoxes[6].textContent = 'o'
            oWinningPossibilities[2]++
            oWinningPossibilities[3]++
            oWinningPossibilities[7]++
        }
    return true
    }
    else if (oWinningPossibilities[4] === 2 && xWinningPossibilities[4] === 0) {
        if (gridBoxes[1].textContent === '') {
            gridBoxes[1].textContent = 'o'
            oWinningPossibilities[0]++
            oWinningPossibilities[4]++
        }
        else if (gridBoxes[4].textContent === '') {
            gridBoxes[4].textContent = 'o'
            oWinningPossibilities[1]++
            oWinningPossibilities[4]++
            oWinningPossibilities[6]++
            oWinningPossibilities[7]++
        }
        else {
            gridBoxes[7].textContent = 'o'
            oWinningPossibilities[2]++
            oWinningPossibilities[4]++
        }
    return true
    }
    else if (oWinningPossibilities[5] === 2 && xWinningPossibilities[5] === 0) {
        if (gridBoxes[2].textContent === '') {
            gridBoxes[2].textContent = 'o'
            oWinningPossibilities[0]++
            oWinningPossibilities[5]++
            oWinningPossibilities[7]++
        }
        else if (gridBoxes[5].textContent === '') {
            gridBoxes[5].textContent = 'o'
            oWinningPossibilities[1]++
            oWinningPossibilities[5]++
        }
        else {
            gridBoxes[8].textContent = 'o'
            oWinningPossibilities[2]++
            oWinningPossibilities[5]++
            oWinningPossibilities[6]++
        }
    return true
    }
    else if (oWinningPossibilities[6] === 2 && xWinningPossibilities[6] === 0) {
        if (gridBoxes[0].textContent === '') {
            gridBoxes[0].textContent = 'o'
            oWinningPossibilities[0]++
            oWinningPossibilities[3]++
            oWinningPossibilities[6]++
        }
        else if (gridBoxes[4].textContent === '') {
            gridBoxes[4].textContent = 'o'
            oWinningPossibilities[1]++
            oWinningPossibilities[4]++
            oWinningPossibilities[6]++
            oWinningPossibilities[7]++
        }
        else {
            gridBoxes[8].textContent = 'o'
            oWinningPossibilities[2]++
            oWinningPossibilities[5]++
            oWinningPossibilities[6]++
        }
    return true
    }
    else if (oWinningPossibilities[7] === 2 && xWinningPossibilities[7] === 0) {
        if (gridBoxes[2].textContent === '') {
            gridBoxes[2].textContent = 'o'
            oWinningPossibilities[0]++
            oWinningPossibilities[5]++
            oWinningPossibilities[7]++
        }
        else if (gridBoxes[4].textContent === '') {
            gridBoxes[4].textContent = 'o'
            oWinningPossibilities[1]++
            oWinningPossibilities[4]++
            oWinningPossibilities[6]++
            oWinningPossibilities[7]++
        }
        else {
            gridBoxes[6].textContent = 'o'
            oWinningPossibilities[2]++
            oWinningPossibilities[3]++
            oWinningPossibilities[7]++
        }
    return true
    }
}

function invincibleBlockX() {
    if (xWinningPossibilities[0] === 2 && oWinningPossibilities[0] === 0) {
        if (gridBoxes[0].textContent === '') {
            gridBoxes[0].textContent = 'o'
            oWinningPossibilities[0]++
            oWinningPossibilities[3]++
            oWinningPossibilities[6]++
        }
        else if (gridBoxes[1].textContent === '') {
            gridBoxes[1].textContent = 'o'
            oWinningPossibilities[0]++
            oWinningPossibilities[4]++
        }
        else {
            gridBoxes[2].textContent = 'o'
            oWinningPossibilities[0]++
            oWinningPossibilities[5]++
            oWinningPossibilities[7]++
        }
    return true
    }
    else if (xWinningPossibilities[1] === 2 && oWinningPossibilities[1] === 0) {
        if (gridBoxes[3].textContent === '') {
            gridBoxes[3].textContent = 'o'
            oWinningPossibilities[1]++
            oWinningPossibilities[3]++
        }
        else if (gridBoxes[4].textContent === '') {
            gridBoxes[4].textContent = 'o'
            oWinningPossibilities[1]++
            oWinningPossibilities[4]++
            oWinningPossibilities[6]++
            oWinningPossibilities[7]++
        }
        else {
            gridBoxes[5].textContent = 'o'
            oWinningPossibilities[1]++
            oWinningPossibilities[5]++
        }
    return true
    }
    else if (xWinningPossibilities[2] === 2 && oWinningPossibilities[2] === 0) {
        if (gridBoxes[6].textContent === '') {
            gridBoxes[6].textContent = 'o'
            oWinningPossibilities[2]++
            oWinningPossibilities[3]++
            oWinningPossibilities[7]++
        }
        else if (gridBoxes[7].textContent === '') {
            gridBoxes[7].textContent = 'o'
            oWinningPossibilities[2]++
            oWinningPossibilities[4]++
        }
        else {
            gridBoxes[8].textContent = 'o'
            oWinningPossibilities[2]++
            oWinningPossibilities[5]++
            oWinningPossibilities[6]++
        }
    return true
    }
    else if (xWinningPossibilities[3] === 2 && oWinningPossibilities[3] === 0) {
        if (gridBoxes[0].textContent === '') {
            gridBoxes[0].textContent = 'o'
            oWinningPossibilities[0]++
            oWinningPossibilities[3]++
            oWinningPossibilities[6]++
        }
        else if (gridBoxes[3].textContent === '') {
            gridBoxes[3].textContent = 'o'
            oWinningPossibilities[1]++
            oWinningPossibilities[3]++
        }
        else {
            gridBoxes[6].textContent = 'o'
            oWinningPossibilities[2]++
            oWinningPossibilities[3]++
            oWinningPossibilities[7]++
        }
    return true
    }
    else if (xWinningPossibilities[4] === 2 && oWinningPossibilities[4] === 0) {
        if (gridBoxes[1].textContent === '') {
            gridBoxes[1].textContent = 'o'
            oWinningPossibilities[0]++
            oWinningPossibilities[4]++
        }
        else if (gridBoxes[4].textContent === '') {
            gridBoxes[4].textContent = 'o'
            oWinningPossibilities[1]++
            oWinningPossibilities[4]++
            oWinningPossibilities[6]++
            oWinningPossibilities[7]++
        }
        else {
            gridBoxes[7].textContent = 'o'
            oWinningPossibilities[2]++
            oWinningPossibilities[4]++
        }
    return true
    }
    else if (xWinningPossibilities[5] === 2 && oWinningPossibilities[5] === 0) {
        if (gridBoxes[2].textContent === '') {
            gridBoxes[2].textContent = 'o'
            oWinningPossibilities[0]++
            oWinningPossibilities[5]++
            oWinningPossibilities[7]++
        }
        else if (gridBoxes[5].textContent === '') {
            gridBoxes[5].textContent = 'o'
            oWinningPossibilities[1]++
            oWinningPossibilities[5]++
        }
        else {
            gridBoxes[8].textContent = 'o'
            oWinningPossibilities[2]++
            oWinningPossibilities[5]++
            oWinningPossibilities[6]++
        }
    return true
    }
     else if (xWinningPossibilities[6] === 2 && oWinningPossibilities[6] === 0) {
        if (gridBoxes[0].textContent === '') {
            gridBoxes[0].textContent = 'o'
            oWinningPossibilities[0]++
            oWinningPossibilities[3]++
            oWinningPossibilities[6]++
        }
        else if (gridBoxes[4].textContent === '') {
            gridBoxes[4].textContent = 'o'
            oWinningPossibilities[1]++
            oWinningPossibilities[4]++
            oWinningPossibilities[6]++
            oWinningPossibilities[7]++
        }
        else {
            gridBoxes[8].textContent = 'o'
            oWinningPossibilities[2]++
            oWinningPossibilities[5]++
            oWinningPossibilities[6]++
        }
    return true
    }
     else if (xWinningPossibilities[7] === 2 && oWinningPossibilities[7] === 0) {
        if (gridBoxes[2].textContent === '') {
            gridBoxes[2].textContent = 'o'
            oWinningPossibilities[0]++
            oWinningPossibilities[5]++
            oWinningPossibilities[7]++
        }
        else if (gridBoxes[4].textContent === '') {
            gridBoxes[4].textContent = 'o'
            oWinningPossibilities[1]++
            oWinningPossibilities[4]++
            oWinningPossibilities[6]++
            oWinningPossibilities[7]++
        }
        else {
            gridBoxes[6].textContent = 'o'
            oWinningPossibilities[2]++
            oWinningPossibilities[3]++
            oWinningPossibilities[7]++
        }
    return true
    }
}

function invincibleTowardsDraw() {
    if (gridBoxes[1].textContent === '') {
        gridBoxes[1].textContent = 'o'
        oWinningPossibilities[0]++
        oWinningPossibilities[4]++
    }
    else if (gridBoxes[2].textContent === '') {
        gridBoxes[2].textContent = 'o'
        oWinningPossibilities[0]++
        oWinningPossibilities[5]++
        oWinningPossibilities[7]++
    }
    else if (gridBoxes[3].textContent === '') {
        gridBoxes[3].textContent = 'o'
        oWinningPossibilities[1]++
        oWinningPossibilities[3]++
    }
    else if (gridBoxes[4].textContent === '') {
        gridBoxes[4].textContent = 'o'
        oWinningPossibilities[1]++
        oWinningPossibilities[4]++
        oWinningPossibilities[6]++
        oWinningPossibilities[7]++
    }
    else if (gridBoxes[5].textContent === '') {
        gridBoxes[5].textContent = 'o'
        oWinningPossibilities[1]++
        oWinningPossibilities[5]++
    }
    else if (gridBoxes[6].textContent === '') {
        gridBoxes[6].textContent = 'o'
        oWinningPossibilities[2]++
        oWinningPossibilities[3]++
        oWinningPossibilities[7]++
    }
    else if (gridBoxes[7].textContent === '') {
        gridBoxes[7].textContent = 'o'
        oWinningPossibilities[2]++
        oWinningPossibilities[4]++
    }
    else if (gridBoxes[8].textContent === '') {
        gridBoxes[8].textContent = 'o'
        oWinningPossibilities[2]++
        oWinningPossibilities[5]++
        oWinningPossibilities[6]++
    }
    
    
}

function checkForWin() {
    for (var i=0; i<xWinningPossibilities.length; i++){
        if (xWinningPossibilities[i] === 3) {
            alert('x wins!')
            return 'result!'
        }
    }
    for (var i=0; i<oWinningPossibilities.length; i++){
        if (oWinningPossibilities[i] === 3) {
            alert('o wins!')
            return 'result!'
        }
    }
}

function checkForDraw() {
    if (turnCounter === 9) {
        alert("it's a draw!")
    }
}

for (var i=0; i<gridBoxes.length; i++) {
    gridBoxes[i].addEventListener('click', handleUserSelection)
}

function handleTwoPlayerMode() {
    gameMode = 'twoPlayer';
    resetGame();
}

function handleInvincibleMode() {
    gameMode = 'invincible';
    resetGame();
}

function handlePatheticMode() {
    gameMode = 'pathetic';
    resetGame();
}

function resetGame() {
    xWinningPossibilities = new Array(8).fill(0);
    oWinningPossibilities = new Array(8).fill(0);
    turnCounter = 0;
    gridBoxes.forEach(function (box){
        box.textContent = ''
    })
}

patheticBtn.addEventListener('click', handlePatheticMode)
invincibleBtn.addEventListener('click', handleInvincibleMode)
twoPlayerBtn.addEventListener('click', handleTwoPlayerMode)
