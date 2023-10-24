let boxs = document.querySelectorAll('.box')
boxs = Array.from(boxs)

let currentPlayer = "X"

// let winningCombinations = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
// ]

// function checkForWinner(){
//     winningCombinations.forEach(function(combination){
//         let check = combination.every(idx => boxs[idx].innerText.trim() == currentPlayer)
//         if(check){
//             highlightCells(combination)
//         }
//     })
// }

// function highlightCells(combination){
//     combination.forEach(function(idx){
//         cells[idx].classList.add("highlight")
//     })
// }

boxs.forEach(function(box){
    box.addEventListener('click', function(){
        if(box.innerText.trim() != "") return
        box.innerText = currentPlayer
        // checkForWinner()
        currentPlayer = currentPlayer == "X" ? "O" : "X"
    })
})