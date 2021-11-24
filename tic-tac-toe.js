// Random decision of which player starts the game
let players = ["Player 1", "Player 2"];
let playerTurn = players[Math.floor(Math.random() * 2)];
let systemMessage = document.getElementsByClassName("systemMessage")[0];
systemMessage.textContent = playerTurn + " Starts!";

// Event listener when we click an element within the parent element #gameGrid.
const tileChoice = document.querySelector("#gameGrid");

const playerTileChoice = function(event){
                        if (event.target.textContent != ""){
                            console.log("you cant choose this tile");
                        } else {
                            playerSymbol(event);
                        }
                            checkWinner();
                        };

tileChoice.addEventListener("click", playerTileChoice);

// This function will keep track of the players turn and will print "X" || "O" depending on who's turn is it.
function playerSymbol(event){
    if (playerTurn == players[0]){
        event.target.textContent = "X";
        event.target.style.color = "rgba(255, 93, 93, 1)";
        systemMessage.textContent = players[1] + " , Turn!";
        return playerTurn = players[1];
    } else if (playerTurn == players[1]){
        event.target.textContent = "O";
        event.target.style.color = "rgba(92, 189, 255, 1)"
        systemMessage.textContent = players[0] + " , Turn!";
        return playerTurn = players[0];
    }
};

// Comparison event to declare winner. (will attempt to optimise)(something between line 36 and line 44 is conflicting with my function on line 88).

function checkWinner(){
    let selectedTiles = [];
    let selectID = document.getElementsByClassName("choiceGrid");

    for (let x = 0; x < selectID.length; x ++){
        if (selectID[x].textContent != ""){
        selectedTiles.push(selectID[x].length);
        }
    }
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
            systemMessage.textContent = players[0] + " Wins!";
            // Update ScoreBoard content
            document.getElementsByClassName("scoreBoard")[0].textContent = parseInt(document.getElementsByClassName("scoreBoard")[0].textContent) + 1;
            //This will stop the event listener
            tileChoice.removeEventListener("click", playerTileChoice);
            

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
            systemMessage.textContent = players[1] + " Wins!";
            // Update ScoreBoard content
            document.getElementsByClassName("scoreBoard")[1].textContent = parseInt(document.getElementsByClassName("scoreBoard")[1].textContent) + 1;
            //This will stop the event listener
            tileChoice.removeEventListener("click", playerTileChoice);
            
        } else if (selectID.length === selectedTiles.length){
            systemMessage.textContent = "Is a Draw!";

    };
};

function restartGame(){
    const gridChoice = document.querySelectorAll(".choiceGrid");
    for (let i = 0; i < gridChoice.length; i++){
        gridChoice[i].textContent = "";
    }
    tileChoice.addEventListener("click", playerTileChoice);
    systemMessage.textContent = playerTurn + " Starts!";
};