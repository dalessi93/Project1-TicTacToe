// Random decision of which player starts the game
let players = ["Player 1", "Player 2"];
let playerTurn = players[Math.floor(Math.random() * 2)];
let systemMessage = document.getElementsByClassName("systemMessage")[0];
systemMessage.textContent = playerTurn + ", \r\n Starts!";

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
        systemMessage.textContent = players[1] + ", \r\n Turn!";
        return playerTurn = players[1];
    } else if (playerTurn == players[1]){
        event.target.textContent = "O";
        event.target.style.color = "rgba(92, 189, 255, 1)"
        systemMessage.textContent = players[0] + ", \r\n Turn!";
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
            systemMessage.textContent = players[0] + ", \r\n Wins!";
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
            systemMessage.textContent = players[1] + ", \r\n Wins!";
            // Update ScoreBoard content
            document.getElementsByClassName("scoreBoard")[1].textContent = parseInt(document.getElementsByClassName("scoreBoard")[1].textContent) + 1;
            //This will stop the event listener
            tileChoice.removeEventListener("click", playerTileChoice);
            
        } else if (selectID.length === selectedTiles.length){
            systemMessage.textContent = "Is a\r\n Draw!";

    };
};

function restartGame(){
    const gridChoice = document.querySelectorAll(".choiceGrid");
    for (let i = 0; i < gridChoice.length; i++){
        gridChoice[i].textContent = "";
    }
    tileChoice.addEventListener("click", playerTileChoice);
    systemMessage.textContent = playerTurn + ", \r\n Starts!";
};

function displayNameWindow(){
    document.getElementById("namePromptWindow").style.display = "block";
};

function hideNameWindow(){
    document.getElementById("namePromptWindow").style.display = "none";
};

function changeName(){
    //If input is not empty, change name to input value
    if (document.getElementsByTagName("input")[0].value != ""){
        if (document.getElementsByTagName("input")[0].value === document.getElementsByTagName("input")[1].value || document.getElementsByTagName("input")[0].value === document.getElementsByClassName("player")[1].textContent){
            document.getElementsByTagName("h4")[0].textContent = "Name taken, try something else";
            document.getElementsByTagName("h4")[0].style.color = "red";
            return;
        } else {
        players[0] = document.getElementsByTagName("input")[0].value;
        document.getElementsByClassName("player")[0].textContent = players[0];
        document.getElementsByTagName("input")[0].value = "";
    }
    }
    if (document.getElementsByTagName("input")[1].value != ""){
        if (document.getElementsByTagName("input")[1].value === document.getElementsByTagName("input")[0].value || document.getElementsByTagName("input")[1].value === document.getElementsByClassName("player")[0].textContent){
            document.getElementsByTagName("h4")[0].textContent = "Name taken, try something else";
            document.getElementsByTagName("h4")[0].style.color = "red";
            return;
        } else {
        players[1] = document.getElementsByTagName("input")[1].value;
        document.getElementsByClassName("player")[1].textContent = players[1];
        document.getElementsByTagName("input")[1].value = "";
        }
    }
    document.getElementsByTagName("h4")[0].textContent = "Please choose your name";
    document.getElementsByTagName("h4")[0].style.color = "black";
    // Close changeName UI
    hideNameWindow();
    //Change name mid-game without jumping/missing turns.
    if (playerTurn === "Player 1"){
        systemMessage.textContent = players[0] + ", \r\n is Next!";
        return playerTurn = players[0];
    } else if (playerTurn === "Player 2"){
        systemMessage.textContent = players[1] + ", \r\n is Next!";
        return playerTurn = players[1]
    }
};