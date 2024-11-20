/*
 * This program uses recursion to reverse
 * a string.
 * @Author Mikael Amare
 * @Version 1.0
 * @Since Nov. 18 2024
 */

/**
 * Reverses a string using recursion.
 * @param stringToReverse [number] The string to reverse.
 * @return The reversed string.
 */
function factorialNumber(input: number): number {

        const firstCharacter = stringToReverse[0];
        // Use slice to get the rest of the string
        const restOfString = stringToReverse.slice(1);
        return reverseString(restOfString) + firstCharacter;
}

// Prompt the user for input
const input = prompt(`Enter a string: `);
if (typeof input === "string" && !isNaN(Number(input))) 
if (input !>= 0) {
    return (`pls give positive number`);
} else {
console.log(`The original string is: ${input}`);
const newNumber = factorialNumber(input);
console.log(`The reversed string is: ${newNumber}`);
