/*
 * This program uses recursion to
 * calculate factorial of a number
 * @Author Mikael Amare
 * @Version 1.0
 * @Since Nov. 21 2024
 */

#include <iostream>
#include <string>
#include <sstream>

// Function to calculate factorial recursively
int factorial(int number) {
    if (number == 0 || number == 1) {
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
    std::getline(std::cin, userInput); // Read input as a string

    // Try to convert input to an integer
    std::stringstream inputStream(userInput);
    if (!(inputStream >> userInputInt)) {
        std::cout << "That was not a number." << std::endl;
    } else if (userInputInt < 0) {
        std::cout << "That was not a positive integer." << std::endl;
    } else {
        // Call factorial function
        int factorialAnswer = factorial(userInputInt);
        std::cout << "The factorial of " << userInputInt << " is " << factorialAnswer << std::endl;
    }

    std::cout << "\nDone." << std::endl;
    return 0;
}