let maxNumber = parseInt(prompt("Enter the maximum number: "));
while(!maxNumber){
    maxNumber = prompt("Invalid input. Please enter a valid maximum number: ");
}
const targetNumber = Math.floor(Math.random() * maxNumber) + 1;
console.log(`The target number is: ${targetNumber}`); // For debugging purposes

let guess = prompt("Enter your guess: (or 'q' to quit): ");
let attempts = 1;

while(parseInt(guess) !== targetNumber){
    if(guess === 'q') break;
    guess = parseInt(guess);
    
    if(guess < targetNumber){
        guess = prompt("Too low! Try again: ");
        attempts++;
    } else if(guess > targetNumber){
        guess = prompt("Too high! Try again: ");
        attempts++;
    } else {
        guess = prompt("Invalid input. Please enter a valid guess: (or 'q' to quit)");
    }
}

if(guess === 'q'){
    console.log("Game over! You quit the game.");
}

console.log("Congratulations! You've guessed the number!");