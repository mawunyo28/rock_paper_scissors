
let choices = ["rock", "paper", "scissors"];
let buttons = document.querySelectorAll("button");
let computerScore = 0;
let humanScore = 0;



function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
}

function getComputerChoice(choices) {
  let choice_num = getRandomInteger(0, 2);

  return choices[choice_num].toLowerCase();
}


function getHumanChoice(/*choices */ btn) {
  //   let user_choice = prompt(`Please enter a number that corresponds with the following choices:
  // 1. Rock
  // 2. Paper
  // 3. Scissors
  // `);

  user_choice = btn.textContent.toLowerCase();

  return user_choice;
  //
  // if (user_choice < 4) {
  //
  //   return user_choice = choices[parseInt(user_choice) - 1];
  // }

}


function playRound(humanChoice, computerChoice) {

  for (i = 0; i < 3; i++) {
    if ((humanChoice == choices[i] && computerChoice == choices[i])) {
      alert("Oh its a draw!");
    }
  }

  // Rock looses to paper
  if (humanChoice == choices[0] && computerChoice == choices[1]) {
    computerScore += 1;
    alert(`You chose ${humanChoice}\nComputer chose ${computerChoice}`);
    alert(`You lost!`);
  }
  // Rock beats Scissors
  else if (humanChoice == choices[0] && computerChoice == choices[2]) {
    humanScore += 1;
    alert(`You chose ${humanChoice}\nComputer chose ${computerChoice}`);
    alert(`You won!`);

  }

  // Paper beats rock
  else if (humanChoice == choices[1] && computerChoice == choices[0]) {
    humanScore += 1;
    alert(`You chose ${humanChoice}\nComputer chose ${computerChoice}`);
    alert(`You won!`);


  }

  // Paper looses to scissors
  else if (humanChoice == choices[1] && computerChoice == choices[2]) {
    alert(`You chose ${humanChoice}\nComputer chose ${computerChoice}`);
    alert(`You lost!`);

    computerScore += 1;
  }

  // Scissors looses to rock
  else if (humanChoice == choices[2] && computerChoice == choices[0]) {
    alert(`You chose ${humanChoice}\nComputer chose ${computerChoice}`);
    alert(`You lost!`);

    computerScore += 1;
  }
  // Scissors Beats paper
  else if (humanChoice == choices[2] && computerChoice == choices[1]) {
    alert(`You chose ${humanChoice}\nComputer chose ${computerChoice}`);
    alert(`You won!`);


    humanScore += 1;
  }

  console.log("Human score" + humanScore);
  console.log("computerScore " + computerScore);
}

function playGame() {

  let i = 0
  while (i < 5) {
    buttons.forEach((button) => {
      button.addEventListener('click', (event) => {
        humanSelection = getHumanChoice(button);
        computerSelection = getComputerChoice(choices);
        playRound(humanSelection, computerSelection);

        event.stopImmediatePropagation();
      });
    });
    // let humanSelection = getHumanChoice(choices);
    // let computerSelection = getComputerChoice(choices);
    // results = playRound(humanSelection, computerSelection, humanScore, computerScore);
    //
    // computerScore = results[1];
    // humanScore = results[0]
    i += 1;
  }


  function checkScores() {
    if (computerScore == humanScore) {
      return "It was a draw!";
    }
    else if (computerScore > humanScore) {
      return "You lost!";
    }
    else {
      return "You won";
    }
  }

  alert(`At the end of this beautiful game\nYou scored ${humanScore} and the computer scored ${computerScore} meaning ${checkScores()}`);
}

playGame();


