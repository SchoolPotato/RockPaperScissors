function RockPaperScissors(){
    let body = document.getElementById("main")
    
    if(document.getElementById("pickMode") == undefined){
        let paragraph = document.createElement("P");
        paragraph.innerHTML = "Pick a Game Mode."
        paragraph.id = "pickMode";

        let button1 = document.createElement("BUTTON");
        button1.id = "mode1";
        button1.innerHTML = "Best 2/3";
        button1.onClick = RPMTwoThree();

        let button2 = document.createElement("BUTTON");
        button2.id = "mode2";
        button2.innerHTML="Best 3/5";
        button2.onClick = RPMThreeFive();

        let button3 = document.createElement("BUTTON");
        button3.id = "mode3";
        button3.innerHTML = "Best 4/7";
        button3.onClick = RPMFourSeven();

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
    button1.id = "mode1";
    button1.innerHTML = "Best 2/3";
    button1.onClick = Rock();

    let button2 = document.createElement("BUTTON");
    button2.id = "mode2";
    button2.innerHTML="Best 3/5";
    button2.onClick = Paper();

    let button3 = document.createElement("BUTTON");
    button3.id = "mode3";
    button3.innerHTML = "Best 4/7";
    button3.onClick = Scissors();
    
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