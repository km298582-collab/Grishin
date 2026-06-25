const boardElement = document.getElementById("board");



let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true; 
let currentPlayer = "X";

const winPattern = 
[
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],

[0, 3, 6],
[1, 4, 7],
[2, 5, 8],

[0, 4, 8],
[2, 4, 6]
]
 
const cells = document.querySelectorAll(".cell")

cells.forEach(cell => {
cell.addEventListener("click", clicker)
})
    
function clicker(event) 
{
    const index = event.target.getAttribute("data-index")
    console.log(index)

    if(board[index] === "" && gameActive) {
        board[index] = currentPlayer
        event.target.textContent = currentPlayer

        if (checkWin()) 
        {
            alert(currentPlayer + " победил!")
            gameActive = false;
        }
        else if (board.every(cell => cell !== "")) 
        {
            alert("Ничья!")
            gameActive = false;
        } 
        else 
        {
        currentPlayer = currentPlayer === "X" ? "O" : "X"
        }
    }

}    


function checkWin() {
return winPattern.some(pattern => {
    return pattern.every(index => board[index] === currentPlayer)
})
}

const RES = document.getElementById("reset");
RES.addEventListener("click", RS => {
board = ["", "", "", "", "", "", "", "", ""];
gameActive = true;
currentPlayer = "X";
cells.forEach(CELL => CELL.textContent = "");
})