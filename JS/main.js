function gameSetup(){
    let body = document.getElementById("main")
    
    if(document.getElementById("pickMode") == undefined){
        let paragraph = document.createElement("P");
        paragraph.innerHTML = "Pick a Game Mode."
        paragraph.id = "pickMode";

        let button1 = document.createElement("BUTTON");
        button1.id = "mode1";
        button1.innerHTML = "Best 2/3";
        button1.setAttribute("onclick", "RPMTwoThree();")

        let button2 = document.createElement("BUTTON");
        button2.id = "mode2";
        button2.innerHTML="Best 3/5";
        button2.setAttribute("onclick", "RPMThreeFive();")

        let button3 = document.createElement("BUTTON");
        button3.id = "mode3";
        button3.innerHTML = "Best 4/7";
        button3.setAttribute("onclick", "RPMFourSeven();")

        body.appendChild(paragraph);
        body.appendChild(button1);
        body.appendChild(button2);
        body.appendChild(button3);
    }
  }

function RPMTwoThree(){
    let paragraph = document.createElement("P");
    let body = document.getElementById("main");
    paragraph.innerHTML = "Okay, pick Rock, Paper, or Scissors."


    let button1 = document.createElement("BUTTON");
    button1.id = "rock";
    button1.innerHTML = "Rock";
    button1.setAttribute("onclick", "Rock(); rockPaperScissors('Rock', 2);");

    let button2 = document.createElement("BUTTON");
    button2.id = "paper";
    button2.innerHTML="Paper";
    button2.setAttribute("onclick", "Paper(); rockPaperScissors('Paper', 2);");

    let button3 = document.createElement("BUTTON");
    button3.id = "scissors";
    button3.innerHTML = "Scissors";
    button3.setAttribute("onclick", "Scissors(); rockPaperScissors('Scissors', 2);");
    
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
    let cpuDecision = Math.floor(Math.random() * Math.floor(3)) + 1;
    let body = document.getElementById("main");
    let para = document.createElement("P");
    para.id = "WinLoss";

    if(decision == 'Rock' && cpuDecision == 3 || decision == 'Paper' && cpuDecision == 1 || decision == 'Scissors' && cpuDecision == 2){
        playerScore++
        para.innerHTML = "The player wins. The scores are now: Player's Score: " + playerScore + ", Computer's Score: " + cpuScore;
        console.log(cpuScore);
        console.log(playerScore);
    } else if (decision == 'Rock' && cpuDecision == 1 || decision == 'Paper' && cpuDecision == 2 || decision == 'Scissors' && cpuDecision == 3){
        para.innerHTML = "It's a tie. Try again."
    } else {
        cpuScore++
        para.innerHTML = "The computer wins. The scores are now: Player's Score: " + playerScore + ", Computer's Score: " + cpuScore;
        console.log(cpuScore);
        console.log(playerScore);
    }
    body.appendChild(para);

    if(playerScore <= turns && cpuScore <= turns){
        switch(turns){
            case 3:
                RPMTwoThree();
                break;
            case 5:
                RPMThreeFive();
                break;
            case 7:
                RPMFourSeven();
                break;
        }

    }else if(playerScore > cpuScore && playerScore >= turns){
        let para2 = document.createElement("P");
        para2.innerHTML = "The player wins the whole match. Victory is yours!";
        body.appendChild(para2);
        playerScore = 0;
        cpuScore = 0;
    }else if (playerScore < cpuScore && cpuScore >= turns){
        let para2 = document.createElement("P");
        para2.innerHTML = "The computer wins the whole match. You've been defeated! Would you like to try again?";
        body.appendChild(para2);
    }
}