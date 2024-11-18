/**
 * This program uses recursion to reverse
 *  a string
 * @Author Mikael Amare
 * @Version 1.0
 * @Since Nov. 18 2024
 */

/**
 * 
 * @param accepts string
 * @return the string backwards. using recursion 
 */

function reverseString(stringToReverse: String): String {
  
  if (stringToReverse == ``) {
    return ``
  } else {
    firstCharacter = stringToReverse[0]
    restOfString = stringToReverse[1]
    return reversedString(RestOfString) + firstCharacter
   }
}

function main(): Void {
    // calls a recursive function

    console.log(``)
    console.log(`The original string is: ${stringToReverse}`)
    theReversedString = reverseString(stringToReverse)
    console.log(`The reversed string is: ${theReversedString}`)
}