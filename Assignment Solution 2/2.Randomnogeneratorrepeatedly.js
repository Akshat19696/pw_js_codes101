let delayInSeconds = 3;
let remainingTime = delayInSeconds;
let intervalId;

// Display message every second until the random number is generated
function countdown() {
    console.log(`Time remaining: ${remainingTime} seconds`);
    remainingTime--;

    if (remainingTime < 0) {
        clearInterval(intervalId);
        console.log("Generating random number...");
        let randomNumber = Math.floor(Math.random() * 100); // Generate random number between 0 and 99
        console.log("Random number:", randomNumber);
    }
}

console.log(`Delaying random number generation for ${delayInSeconds} seconds...`);

// Start the countdown
intervalId = setInterval(countdown, 1000);

// Generate random number after the specified delay
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Generating random number...");
    let randomNumber = Math.floor(Math.random() * 100); // Generate random number between 0 and 99
    console.log("Random number:", randomNumber);
}, delayInSeconds * 1000);
