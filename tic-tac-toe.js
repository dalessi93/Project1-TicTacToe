// Random decision of which player starts the game
let players = ["Player 1", "Player 2"];
let playerTurn = players[Math.floor(Math.random() * 2)];
let systemMessage = document.getElementsByClassName("systemMessage")[0];
systemMessage.textContent = playerTurn + " starts!";

// Event listener when we click an element within the parent element #gameGrid.
const tileChoice = document.querySelector("#gameGrid");

tileChoice.addEventListener("click", function(event){
    if (event.target.textContent != ""){
        console.log("you cant choose this tile");
    } else {
        playerSymbol(event);
    }
    checkWinner();
});

// This function will keep track of the players turn and will print "X" || "O" depending on who's turn is it.
function playerSymbol(event){
    if (playerTurn == "Player 1"){
        event.target.textContent = "X";
        systemMessage.textContent = "Player 2, turn!";
        return playerTurn = "Player 2";
    } else if (playerTurn == "Player 2"){
        event.target.textContent = "O";
        systemMessage.textContent = "Player 1, turn!";
        return playerTurn = "Player 1";
    }
};

// Comparison event to declare winner. (will attempt to optimise)

function checkWinner(){
    let selectID = document.getElementsByClassName("choiceGrid");
    if (
        selectID[0].textContent === "X" && selectID[1].textContent === "X" && selectID[2].textContent === "X" ||
        selectID[0].textContent === "X" && selectID[3].textContent === "X" && selectID[6].textContent === "X" ||
        selectID[0].textContent === "X" && selectID[4].textContent === "X" && selectID[8].textContent === "X" ||
        selectID[2].textContent === "X" && selectID[5].textContent === "X" && selectID[8].textContent === "X" ||
        selectID[2].textContent === "X" && selectID[4].textContent === "X" && selectID[6].textContent === "X" ||
        selectID[8].textContent === "X" && selectID[7].textContent === "X" && selectID[6].textContent === "X"
        ||
        selectID[1].textContent === "X" && selectID[4].textContent === "X" && selectID[7].textContent === "X"
        ||
        selectID[3].textContent === "X" && selectID[4].textContent === "X" && selectID[5].textContent === "X"
        ){
            systemMessage.textContent = "Player 1 Wins!!";

    } else if (
        selectID[0].textContent === "O" && selectID[1].textContent === "O" && selectID[2].textContent === "O" ||
        selectID[0].textContent === "O" && selectID[3].textContent === "O" && selectID[6].textContent === "O" ||
        selectID[0].textContent === "O" && selectID[4].textContent === "O" && selectID[8].textContent === "O" ||
        selectID[2].textContent === "O" && selectID[5].textContent === "O" && selectID[8].textContent === "O" ||
        selectID[2].textContent === "O" && selectID[4].textContent === "O" && selectID[6].textContent === "O" ||
        selectID[8].textContent === "O" && selectID[7].textContent === "O" && selectID[6].textContent === "O"
        ||
        selectID[1].textContent === "O" && selectID[4].textContent === "O" && selectID[7].textContent === "O"
        ||
        selectID[3].textContent === "O" && selectID[4].textContent === "O" && selectID[5].textContent === "O"
        ){
            systemMessage.textContent = "Player 2 Wins!!";
        } // else {
        //     console.log("is a Draw");
        // }
    
};
