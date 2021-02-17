var gridBoxes = document.querySelectorAll('.grid-box');
// var squareRoot = Math.sqrt(gridBoxes.length);
var xWinningPossibilities = new Array(8).fill(0)
// these are [0-horizontal1, 1-horizontal2, 2-horizontal3, 3-vertical1, 4-vertical2, 5-vertical3, 6-diagonal1, 7-diagonal2]
var oWinningPossibilities = new Array(8).fill(0)
var turnCounter = 0;
var filledBoxes = 0;

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
        turnCounter++
        if (checkForWin() != "result!") {
            checkForDraw()
        }
    }
} 

function checkForWin() {
    for (i=0; i<xWinningPossibilities.length; i++){
        if (xWinningPossibilities[i] === 3) {
            alert('x wins!')
            return 'result!'
        }
    }
    for (i=0; i<oWinningPossibilities.length; i++){
        if (oWinningPossibilities[i] === 3) {
            alert('o wins!')
            return 'result!'
        }
    }
}

function checkForDraw() {
    if (xWinningPossibilities[0]+xWinningPossibilities[1]+xWinningPossibilities[2]+oWinningPossibilities[0]+oWinningPossibilities[1]+oWinningPossibilities[2] === 9) {
        alert("it's a draw!")
    }
}

for (var i=0; i<gridBoxes.length; i++) {
    gridBoxes[i].addEventListener('click', handleUserSelection)
}