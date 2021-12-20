let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choice = ["r", "s", "p"];
  const MathNumber = Math.floor(Math.random()*3);
  return choice[MathNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "s") return "Scissors";
  return "Paper";
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  const smallUser = "user".fontsize(3).sub();
  const smallComp = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(user)}${smallUser} beats ${convertToWord(computer)}${smallComp}. You win! 🔥`;
  document.getElementById(user).classList.add('green-glow');
  setTimeout(() => document.getElementById(user).classList.remove('green-glow'), 500);
}



function lose(user, computer) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  const smallUser = "user".fontsize(3).sub();
  const smallComp = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(user)}${smallUser} loses to ${convertToWord(computer)}${smallComp}. You lost! 😓`;
  document.getElementById(user).classList.add('red-glow');
  setTimeout(() => document.getElementById(user).classList.remove('red-glow'), 500);
}

function draw(user, computer) {
  const smallUser = "user".fontsize(3).sub();
  const smallComp = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(user)}${smallUser} equals ${convertToWord(computer)}${smallComp}. It's a draw!`;
  document.getElementById(user).classList.add('gray-glow');
  setTimeout(() => document.getElementById(user).classList.remove('gray-glow'), 500);
}


function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "sp":
    case "pr":
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "ps":
    case "rp":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "ss":
    case "pp":
      draw(userChoice, computerChoice);
      break;

  }
}

function main() {
  rock_div.addEventListener("click", () => game("r"));

  paper_div.addEventListener("click", () => game("p"));

  scissors_div.addEventListener("click", () => game("s"));

}
main();
