/*
 * This program uses recursion to reverse
 * a string.
 * @Author Mikael Amare
 * @Version 1.0
 * @Since Nov. 18 2024
 */

/**
 * Reverses a string using recursion.
 * @param userInput [number] The string to do factorial.
 * @return The reversed string.
 */
function factorialNumber(userInput: number): number {
  if (userInput < 0) {
    return -1;
  } else if {
  }
  const firstCharacter = stringToReverse[0];
    // Use slice to get the rest of the string
    const restOfFactorial = userInput - 1;
    return factorialNumber(restOfFactorial) + firstCharacter;
    }
}

// Prompt the user for input
const userInput = prompt(`Enter a number: `);
const newNumber = factorialNumber(userInput);
if (newNumber = -1)
console.log(`The factorial of ${userInput} string is: ${newNumber}`);
