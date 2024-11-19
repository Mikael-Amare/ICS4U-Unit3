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

function reverseString(stringToReverse: string): String {


  if (stringToReverse == ``) {
    return ``
  } else {
    const firstCharacter = stringToReverse[0]
    const restOfString = stringToReverse[1]
    return reverseString(restOfString) + firstCharacter
   }
}


function main(): void {
    // calls a recursive function
  
  const stringToReverse = prompt(`Enter a string: `)

  console.log(``)
  console.log(`The original string is: ${stringToReverse}`)
  const theReversedString = reverseString(stringToReverse)
  console.log(`The reversed string is: ${theReversedString}`)
}