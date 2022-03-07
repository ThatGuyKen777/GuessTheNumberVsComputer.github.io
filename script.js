let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () =>{
 return Math.floor(Math.random() * 10)
};

const compareGuesses = (humanGuess, computerGuess, targetNum) =>{
  let human = Math.abs(humanGuess - targetNum);
  let computer = Math.abs(computerGuess - targetNum);
  if (human < computer){
    return true;
  }else if (computer < human){
    return false;
  } else if (computer === human){
    return true;
  }
};

const updateScore = winner =>{
if (winner === 'human'){
  humanScore ++;
} else if (winner === 'computer'){
  computerScore ++;
}
};

const advanceRound = () =>{
  currentRoundNumber ++;
};


