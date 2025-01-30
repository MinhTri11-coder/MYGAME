let numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = document.getElementById("guess").value;
  const message = document.getElementById("message");
  const attemptsText = document.getElementById("attempts");

  if (guess == numberToGuess) {
    message.textContent = "Congratulations! You've guessed the number!";
    message.style.color = "green";
  } else if (guess < numberToGuess) {
    message.textContent = "Too low! Try again.";
    message.style.color = "red";
  } else if (guess > numberToGuess) {
    message.textContent = "Too high! Try again.";
    message.style.color = "red";
  }

  attempts++;
  attemptsText.textContent = "Attempts: " + attempts;
}
