const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput == "bomb" ||
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissor"
    ) {
      return userInput;
    } else {
      console.log("Error!");
    }
  };
  getComputerChoice = () => {
    Math.floor(Math.random() * 2);
  
    switch (randomNumber) {
      case 0:
        return "rock";
        break;
      case 1:
        return "paper";
        break;
      case 2:
        return "scissor";
        break;
    }
  };
  console.log(getComputerChoice()); // should print 'rock', 'paper', or 'scissors'
  
  determineWinner = (userChoice, computerChoice) => {
    if (userChoice == "bomb") {
      return "The user wins!";
    }
    if (userChoice === computerChoice) {
      return "The game is a tie!";
    }
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "The computer won!";
      } else {
        return "You won!";
      }
    }
    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "The computer won!";
      } else {
        return "You won!";
      }
    }
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "The computer won!";
      } else {
        return "You won!";
      }
    }
  };
  console.log(determineWinner("paper", "scissors")); // prints something like 'The computer won!'
  console.log(determineWinner("paper", "paper")); // prints something like 'The game is a tie!'
  console.log(determineWinner("paper", "rock")); // prints something like 'The user won!'
  
  const playGame = () => {
    const userChoice = getUserChoice("scissors");
    const computerChoice = getComputerChoice();
    console.log("You threw: " + userChoice);
    console.log("The computer threw: " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();