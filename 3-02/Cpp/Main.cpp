/*
* This program uses recursion to
* calculate factorial of a number
* @Author Mikael Amare
* @Version 1.0
* @Since Nov. 21 2024
* Copyright [2024] Mikael Amare
*/

#include <iostream>
#include <string>
#include <sstream>

// Function to calculate factorial recursively
int factorial(int number) {
   if (userInputInt < 0) {
      return -1
   } else if (number == 0 || number == 1) {
       return 1;
   } else {
       return number * factorial(number - 1);
   }
}

int main() {
   std::string userInput;
   int userInputInt;

   // Input prompt
   std::cout << "Enter a positive integer: ";

   // Read input as a string
   std::getline(std::cin, userInput);

   // Try to convert input to an integer
   std::stringstream inputStream(userInput);
   if (!(inputStream >> userInputInt)) {
       std::cout << "That was not a number." << std::endl;
   } else {
       // Call factorial function
       int factorialAnswer = factorial(userInputInt);
       if (factorialAnswer === -1) {
          std::cout << "That was not a positive integer." << std::endl;
       } else {
       std::cout << "The factorial of " << userInputInt <<
       " is " << factorialAnswer << std::endl;
       }
   }

   std::cout << "\nDone." << std::endl;
   return 0;
}
