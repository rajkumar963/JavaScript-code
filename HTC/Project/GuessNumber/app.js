// const num=parseInt(Math.random()*100+1);

// const submit=document.querySelector("#subt");
// const userInput=document.querySelector("#guessField");

// const guesses=document.querySelector(".guesses");
// const lastResult=document.querySelector(".lastResult");
// const lowOrHi=document.querySelector(".lowOrHi");

// const startOver=document.querySelector(".resultparas");

// const p=document.createElement('p');

// let prevGuesses=[];
// let numGuesses=1;

// let playGame=true;

// if(playGame){
//     submit.addEventListener("click",function(e){
//        e.preventDefault();
//       const guess= parseInt(userInput.value)
//       console.log(guess);
//       validateGuess(guess);
//     })
// }

// function validateGuess(guess){
//    if(isNaN(guess)){
//     alert("Please enter a number");
//    }else if(guess<1 || guess>100){
//     alert("Please enter a number between 1 and 100");
//    }else{
//     prevGuesses.push(guess);
//     if(numGuesses==11){
//         displayGuess(guess);
//         displayMessage(`Game Over. You lost. The random number was ${num}.`);
//         endgame();
//     }else{
//         displayGuess(guess);
//         checkGuess(guess);
//     }
//    }

// }

// function checkGuess(guess){
//   if(guess==num){
//     displayMessage(`Correct! You guessed the number in ${numGuesses} guesses.`);
//     endgame();
//   }else if(guess<num){
//     displayMessage(`number is Too low!`);
// }
// else if(guess>num){
//     displayMessage(`number is Too high!`);
// }
// }
// numGuesses++;

// function displayGuess(guess){
//    userInput.value="";
//    guesses.innerHTML+=`${guess}, `;
//    numGuesses++;
//    remaining.innerHTML=`${10-numGuesses}`
// }

// function displayMessage(message){
//     lowOrHi.innerHTML=`<h3>${message}</h3>`;

// }

// function newGame(){

// }

// function endgame(){
//     userInput.value="";
//     userInput.setAttribute("disabled"," ");
//     p.classList.add("button");
//     p.innerHTML=`<h2 id="newGame">Start new game</h2>`;
//     startOver.appendChild(p);
//     playGame=false;
//     newGame();
// }


let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}



