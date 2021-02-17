var gridBoxes = document.querySelectorAll('.grid-box')

var box1 = document.querySelector('.one')
var box2 = document.querySelector('.two')
var box3 = document.querySelector('.three')
var box4 = document.querySelector('.four')
var box5 = document.querySelector('.five')
var box6 = document.querySelector('.six')
var box7 = document.querySelector('.seven')
var box8 = document.querySelector('.eight')
var box9 = document.querySelector('.nine')

var turnCounter = 0
var filledBoxes = 0


function handleUserSelection(event) {
    if (event.currentTarget.textContent === '') {
        if (turnCounter % 2 === 0) {
            event.currentTarget.textContent = 'x'
        } else {
            event.currentTarget.textContent = 'o'
        }
        turnCounter++
        checkForResult()
    }
} 

function checkForResult() {
    filledBoxes = 0
    if (box1.textContent+box2.textContent+box3.textContent === 'xxx' || box1.textContent+box2.textContent+box3.textContent === 'ooo') {
        alert(`${box1.textContent} wins!`)
    } 
    else if (box4.textContent+box5.textContent+box6.textContent === 'xxx' || box4.textContent+box5.textContent+box6.textContent === 'ooo') {
        alert(`${box4.textContent} wins!`)
    } 
    else if (box7.textContent+box8.textContent+box9.textContent === 'xxx' || box7.textContent+box8.textContent+box9.textContent === 'ooo') {
        alert(`${box7.textContent} wins!`)
    }
    else if (box1.textContent+box4.textContent+box7.textContent === 'xxx' || box1.textContent+box4.textContent+box7.textContent === 'ooo') {
        alert(`${box1.textContent} wins!`)
    }
    else if (box2.textContent+box5.textContent+box8.textContent === 'xxx' || box2.textContent+box5.textContent+box8.textContent === 'ooo') {
        alert(`${box2.textContent} wins!`)
    }
    else if (box3.textContent+box6.textContent+box9.textContent === 'xxx' || box3.textContent+box6.textContent+box9.textContent === 'ooo') {
        alert(`${box3.textContent} wins!`)
    }
    else if (box1.textContent+box5.textContent+box9.textContent === 'xxx' || box1.textContent+box5.textContent+box9.textContent === 'ooo') {
        alert(`${box1.textContent} wins!`)
    }
    else if (box3.textContent+box5.textContent+box7.textContent === 'xxx' || box3.textContent+box5.textContent+box7.textContent === 'ooo') {
        alert(`${box3.textContent} wins!`)
    }
    gridBoxes.forEach(checkForDraw)
}

function checkForDraw(box) {
    if (box.textContent === 'x' || box.textContent === 'o') {
    filledBoxes++
    }
    if (filledBoxes === gridBoxes.length) {
        alert("it's a draw!")
    }
}

for (var i=0; i<gridBoxes.length; i++) {
    gridBoxes[i].addEventListener('click', handleUserSelection)
}