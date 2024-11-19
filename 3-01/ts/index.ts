/**
 * This program uses recursion to reverse
 * a string.
 * @Author Mikael Amare
 * @Version 1.0
 * @Since Nov. 18 2024
 */

/**
 * Reverses strings using recursion.
 *
 * @param stringToReverse the string to reverse
 * @returns the reversed string
 */
function reverseString(stringToReverse: string): string {
  if (stringToReverse == "") {
    return ""
  } else {
    let firstCharacter: string = stringToReverse[0]
    let restOfString: string = stringToReverse.slice(1, stringToReverse.length)

    return reverseString(restOfString) + firstCharacter
  }
}

const selectedString = prompt('Enter a string to reverse: ')

console.log(`The reversed string is ${reverseString(selectedString)}`);

console.log('\nDone.')
