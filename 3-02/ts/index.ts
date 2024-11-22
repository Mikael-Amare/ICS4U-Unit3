/*
 * This program uses recursion to
 * calculate factorial of a number
 * @Author Mikael Amare
 * @Version 1.0
 * @Since Nov. 21 2024
 */

/**
 * Reverses a string using recursion.
 * @param userInput [number] The string to do factorial.
 * @return The userInput string.
 */

function factorial(userInputInt: number) {
  // recursive function calculating factorial
  if (userInputInt === 1) {
    return 1;
  } else if (userInputInt === 0) {
    return 1
  } else {
    return userInputInt * factorial(userInputInt - 1);
  }
}

const userInput = prompt(`Enter a positive integer: `);

if (userInput === null) {
  console.log(`That was not a number.`);
} else {
  const userInputInt = parseInt(userInput);

  if (isNaN(userInputInt)) {
    console.log(`That was not a number.`);
  } else if (userInputInt < 0) {
    console.log(`That was not a positive integer.`);
  } else {
    // Call function
    const factorialAnswer = factorial(userInputInt);
    console.log(`The factorial of ${userInputInt} is ${factorialAnswer}`);
  }
}
console.log(`\nDone`)
