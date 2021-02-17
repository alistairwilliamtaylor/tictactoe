var gridBoxes = document.querySelectorAll('.grid-box')
var turnCounter = 0

function handleUserSelection(event) {
    if (event.currentTarget.textContent === '') {
        if (turnCounter % 2 === 0) {
            event.currentTarget.textContent = 'x'
        } else {
            event.currentTarget.textContent = 'o'
        }
        turnCounter++
    }
} 

for (var i=0; i<gridBoxes.length; i++) {
    gridBoxes[i].addEventListener('click', handleUserSelection)
}