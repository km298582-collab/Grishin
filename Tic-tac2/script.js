const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
const resetBtn = document.getElementById("reset");

let boardState = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
let currentPlayer = "X";

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

cells.forEach(cell => {
    cell.addEventListener("click", handleClick);
});

function handleClick(event) {
    const index = event.target.getAttribute("data-index");

    if (boardState[index] === "" && gameActive) {
        boardState[index] = currentPlayer;
        event.target.textContent = currentPlayer;

        if (checkWin()) {
            alert(currentPlayer + " победил!");
            gameActive = false;
        } else if (boardState.every(cell => cell !== "")) {
            alert("Ничья!");
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWin() {
    return winPatterns.some(pattern => {
        return pattern.every(index => boardState[index] === currentPlayer);
    });
}

resetBtn.addEventListener("click", function() {
    boardState = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";
    cells.forEach(cell => cell.textContent = "");
});