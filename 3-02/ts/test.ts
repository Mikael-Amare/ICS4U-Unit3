/* Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program calculates factorial
*/

function factorial(userInputInt: number) {
  // recursive function calculating factorial
  if (isNaN(userInputInt)) {
    return -1
  } else if (userInputInt === 1) {
    return 1;
  } else if (userInputInt === 0) {
    return 1
  } else {
    return userInputInt * factorial(userInputInt - 1);
  }
}

// input
const userInput = (prompt("Enter a positive integer: "));
if (userInput === null) {

  } else if (userInput < 0) {
  console.log("That was not a positive integer.");
} else {
    parseInt(userInput)
  // call function
  const factorialAnswer = factorial(userInput);
  if (factorialAnswer == -1) {
    console.log(`That was not a number.`)
  } else {
  console.log(`The factorial of ${userInput} is ${factorialAnswer}`);
  }
}
console.log("\nDone.");