var gridBoxes = document.querySelectorAll('.grid-box')
// var turncounter = 0

function handleUserSelection(event) {
    event.currentTarget.textContent = "x"
} 

for (var i=0; i<gridBoxes.length; i++) {
    gridBoxes[i].addEventListener('click', handleUserSelection)
}