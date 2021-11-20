// Random decision of which player starts the game
let players = ["Player1", "Player2"];
let playerTurn = players[Math.floor(Math.random() * 2)];
alert(playerTurn + " starts");

// Event listener when we click an element within the parent element #gameGrid.
const tileChoice = document.querySelector("#gameGrid");

tileChoice.addEventListener("click", function(event){
    if (event.target.textContent != ""){
        console.log("you cant choose this tile");
    } else {
        playerSymbol(event);
    }
    checkWin();
});

// This function will keep track of the players turn and will print "X" || "O" depending on who's turn is it.
function playerSymbol(event){
    if (playerTurn == "Player1"){
        event.target.textContent = "X";
        return playerTurn = "Player2";
    } else if (playerTurn == "Player2"){
        event.target.textContent = "O";
        return playerTurn = "Player1";
    }
};

// Comparison event to declare winner. (needs to be fixed to only compare when textContent != "")

// function checkWin(){
//     let selectID = document.getElementsByClassName("choiceGrid");
//     if (selectID[0].textContent === selectID[1].textContent && 
//         selectID[0].textContent === selectID[2].textContent || 
//         selectID[0].textContent === selectID[3].textContent && 
//         selectID[0].textContent === selectID[6].textContent ||
//         selectID[0].textContent === selectID[4].textContent && 
//         selectID[0].textContent === selectID[8].textContent ||
//         selectID[2].textContent === selectID[5].textContent && 
//         selectID[2].textContent === selectID[8].textContent ||
//         selectID[2].textContent === selectID[4].textContent && 
//         selectID[0].textContent === selectID[6].textContent ||
//         selectID[6].textContent === selectID[7].textContent && 
//         selectID[6].textContent === selectID[8].textContent){
        
//             if (playerTurn === "Player1"){
//                 console.log("Player 1 Wins!!");
//             } else if (playerTurn === "Player2"){
//                 console.log("Player 2 Wins!!");
//             }
//         } else {
//             console.log("Is a Draw!")
//         }
    
// };