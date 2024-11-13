const Choice = ["rock", "paper", "scissors"];

const userDisplay = document.getElementById('userDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay= document.getElementById('resultDisplay');

function getcomputerChoice(){
 
    return Choice [Math.floor(Math.random()*10)];
 
}

function getResult (userChoice,computerChoice){
       if (userChoice === computerChoice) {
          return "Match Tie" ;
       }
       else  if (userChoice === "rock" && computerChoice  === "scissors") {
           return  "you win";
       }
       else if (userChoice==="paper" && computerChoice ==="rock")  {
             return  "you win";
       }
       else if (userChoice=== "scissors" && computerChoice==="paper") {
            return  "you win";
       }
        
       else {
         return "computer win";
       }
   
    }

    function player(userChoice){ 
        const computerChoice =getcomputerChoice();
     

     userDisplay.textContent = 'Player: ${userChoice}';
     
    computerDisplay.textContent = 'Computer: $(computerChoice}';

    const result=getResult (userChoice.computerChoice);
    resultDisplay.textContent = 'Result: ${result}';

    }