/**
 * This program uses recursion to reverse
 * a string.
 * @Author Mikael Amare
 * @Version 1.0
 * @Since Nov. 18 2024
 */

/**
 * Reverses a string using recursion.
 * @param stringToReverse The string to reverse.
 * @return The reversed string.
 */
function reverseString(stringToReverse: string): string {
  if (stringToReverse === ``) {
    return ``;
  } else {
    const firstCharacter = stringToReverse[0];
    const restOfString = stringToReverse.slice(1); // Use slice to get the rest of the string
    return reverseString(restOfString) + firstCharacter;
  }
}

// Prompt the user for input
const stringToReverse = prompt(`Enter a string: `);

console.log(`The original string is: ${stringToReverse}`);
const theReversedString = reverseString(stringToReverse);
console.log(`The reversed string is: ${theReversedString}`);
