const readline = require("readline");

// Create interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

// Function to get user's guess
function askGuess() {
  rl.question("Guess a number between 1 and 10: ", (input) => {
    const guess = parseInt(input);
    attempts++;

    // ✅ User Input Validation
    if (isNaN(guess)) {
      console.log("Please enter a valid number!");
      askGuess();
      return;
    }

    if (guess < 1 || guess > 10) {
      console.log("Number must be between 1 and 10!");
      askGuess();
      return;
    }

    // 🔁 Conditions to check guess
    if (guess === randomNumber) {
      console.log(`🎉 Correct! You guessed the number in ${attempts} attempts.`);
      rl.close();
    } else if (guess < randomNumber) {
      console.log("Too low! Try again.");
      askGuess();
    } else {
      console.log("Too high! Try again.");
      askGuess();
    }
  });
}

console.log("Welcome to the Number Guessing Game!");
askGuess();
