const num=parseInt(Math.random()*100+1);

const submit=document.querySelector("#subt");
const userInput=document.querySelector("#guessField");

const guesses=document.querySelector(".guesses");
const lastResult=document.querySelector(".lastResult");
const lowOrHi=document.querySelector(".lowOrHi");

const startOver=document.querySelector(".resultparas");

const p=document.createElement('p');

let prevGuesses=[];
let numGuesses=1;

let playGame=true;

if(playGame){
    submit.addEventListener("click",function(e){
       e.preventDefault();
      const guess= parseInt(userInput.value)
      console.log(guess);
      validateGuess(guess);
    })
}

function validateGuess(guess){
   if(isNaN(guess)){
    alert("Please enter a number");
   }else if(guess<1 || guess>100){
    alert("Please enter a number between 1 and 100");
   }else{
    prevGuesses.push(guess);
    if(numGuesses==11){
        displayGuess(guess);
        displayMessage(`Game Over. You lost. The random number was ${num}.`);
        endgame();
    }else{
        displayGuess(guess);
        checkGuess(guess);
    }
   }

}

function checkGuess(guess){
  if(guess==num){
    displayMessage(`Correct! You guessed the number in ${numGuesses} guesses.`);
    endgame();
  }else if(guess<num){
    displayMessage(`number is Too low!`);
}
else if(guess>num){
    displayMessage(`number is Too high!`);
}
}
numGuesses++;

function displayGuess(guess){
   userInput.value="";
   guesses.innerHTML+=`${guess}, `;
   numGuesses++;
   remaining.innerHTML=`${10-numGuesses}`
}

function displayMessage(message){
    lowOrHi.innerHTML=`<h3>${message}</h3>`;

}

function newGame(){

}

function endgame(){
    userInput.value="";
    userInput.setAttribute("disabled"," ");
    p.classList.add("button");
    p.innerHTML=`<h2 id="newGame">Start new game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}


