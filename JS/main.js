function gameSetup(){
    let body = document.getElementById("main")
    
    if(document.getElementById("pickMode") == undefined){
        let paragraph = document.createElement("P");
        paragraph.innerHTML = "Pick a Game Mode."
        paragraph.id = "pickMode";

        let button1 = document.createElement("BUTTON");
        button1.id = "mode1";
        button1.innerHTML = "Best 2/3";
        button1.setAttribute("onclick", "displayOptions(2);")

        let button2 = document.createElement("BUTTON");
        button2.id = "mode2";
        button2.innerHTML="Best 3/5";
        button2.setAttribute("onclick", "displayOptions(3);")

        let button3 = document.createElement("BUTTON");
        button3.id = "mode3";
        button3.innerHTML = "Best 4/7";
        button3.setAttribute("onclick", "displayOptions(4);")

        body.appendChild(paragraph);
        body.appendChild(button1);
        body.appendChild(button2);
        body.appendChild(button3);
    }
}

function resetGame(){
    location.reload();
}

function displayOptions(turns){
    let paragraph = document.createElement("P");
    let scoreDisplay = document.createElement("P");
    let body = document.getElementById("main");
    paragraph.innerHTML = "Okay, pick Rock, Paper, or Scissors.";
    scoreDisplay.id = "scoreDisplay";
    scoreDisplay.innerHTML = "Your score will be displayed here.";

    //Buttons for choices
    let button1 = document.createElement("BUTTON");
    button1.id = "rock";
    button1.innerHTML = "Rock";
    button1.setAttribute("onclick", "Rock(); rockPaperScissors('Rock', " + turns + ");");

    let button2 = document.createElement("BUTTON");
    button2.id = "paper";
    button2.innerHTML="Paper";
    button2.setAttribute("onclick", "Paper(); rockPaperScissors('Paper', " + turns + ");");

    let button3 = document.createElement("BUTTON");
    button3.id = "scissors";
    button3.innerHTML = "Scissors";
    button3.setAttribute("onclick", "Scissors(); rockPaperScissors('Scissors', " + turns + ");");
    
    body.appendChild(scoreDisplay);
    body.appendChild(paragraph);
    body.appendChild(button1);
    body.appendChild(button2);
    body.appendChild(button3);
}

function RPMFourSeven(){
    console.log("RPMFourSeven");
}

function RPMThreeFive(){
    console.log("RPMThreeFive");
}

function Rock(){
    console.log('rock');
}

function Paper(){
    console.log('paper');
}

function Scissors(){
    console.log('scissors');
}

let playerScore = 0;
let cpuScore = 0;

function rockPaperScissors(decision, turns){
    //Setup
    //Randomizes Cpu's decision- I'm adding one to the result in order to make sure it works 100% of the time, zeroes are cursed
    //Also removes functionality from buttons to prevent being able to continue the game after it's over
    let cpuDecision = Math.floor(Math.random() * Math.floor(3)) + 1;
    let body = document.getElementById("main");
    let para = document.getElementById("scoreDisplay");
    let button1 = document.getElementById("rock");
    let button2 = document.getElementById("paper");
    let button3 = document.getElementById("scissors");

    //Deciding victor
    //If the player's decision beats the CPU's decision, add one point to the player.
    if(decision == 'Rock' && cpuDecision == 3 || decision == 'Paper' && cpuDecision == 1 || decision == 'Scissors' && cpuDecision == 2){
        playerScore++
        para.innerHTML = "The player wins. The scores are now: <br>Player's Score: " + playerScore + ", Computer's Score: " + cpuScore;
        console.log(cpuScore);
        console.log(playerScore);
    } 
    
    //If the player's decision is the same as the CPU's decision, do not add points.
    else if (decision == 'Rock' && cpuDecision == 1 || decision == 'Paper' && cpuDecision == 2 || decision == 'Scissors' && cpuDecision == 3){
        para.innerHTML = "It's a tie. The scores are now: <br>Player's Score: " + playerScore + ", Computer's Score: " + cpuScore;
    } 
    
    //If the player's decision loses to the CPU's decision, add points to CPU score.
    else {
        cpuScore++
        para.innerHTML = "The computer wins. The scores are now: <br>Player's Score: " + playerScore + ", Computer's Score: " + cpuScore;
        console.log(cpuScore);
        console.log(playerScore);
    }

    //Restart from beginning
    /*if(playerScore != turns && cpuScore != turns){
        if(turns == 2){
            displayOptions(2);
        } else if(turns == 3){
            displayOptions(3);
        } else if(turns == 4){
            displayOptions(4);
        }
    }*/

    //If either CPU or Player meets win condition, stop the game and display the winner.
    if(playerScore > cpuScore && playerScore >= turns){
        let para2 = document.createElement("P");
        para2.innerHTML = "The player wins the whole match. Victory is yours! Would you like to try again?";
        body.appendChild(para2);
        playerScore = 0;
        cpuScore = 0;

        let resetButton = document.createElement("BUTTON");
        resetButton.id = "reset";
        resetButton.innerHTML = "Restart";
        resetButton.setAttribute("onclick", "resetGame();");
        body.appendChild(resetButton);

        button1.setAttribute("onclick", "");
        button2.setAttribute("onclick", "");
        button3.setAttribute("onclick", "");
        button1.id = "done";
        button2.id = "done";
        button3.id = "done";

    }else if (playerScore < cpuScore && cpuScore >= turns){
        let para2 = document.createElement("P");
        para2.innerHTML = "The computer wins the whole match. You've been defeated! Would you like to try again?";
        body.appendChild(para2);

        let resetButton = document.createElement("BUTTON");
        resetButton.id = "reset";
        resetButton.innerHTML = "Restart";
        resetButton.setAttribute("onclick", "resetGame();");
        body.appendChild(resetButton);
        
        button1.setAttribute("onclick", "");
        button2.setAttribute("onclick", "");
        button3.setAttribute("onclick", "");
        button1.id = "done";
        button2.id = "done";
        button3.id = "done";
    }
}