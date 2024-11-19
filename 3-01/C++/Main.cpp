/*
 * This program uses recursion to reverse
 * a string.
 * @Author Mikael Amare
 * @Version 1.0
 * @Since Nov. 18 2024
 */

#include <iostream>
#include <string>

static auto reverseString(const std::string& stringToReverse) -> std::string {
    if (stringToReverse.empty()) {
        return "";
    } else {
        const char firstCharacter = stringToReverse[0];
        const std::string restOfString = stringToReverse.substr(1); // Get the rest of the string
        return reverseString(restOfString) + firstCharacter;
    }
}

int main() {
    std::string stringToReverse;
    std::cout << "Enter a string: ";
    std::getline(std::cin, stringToReverse); // Use getline to handle spaces in input

    std::cout << "The original string is: " << stringToReverse << '\n';

    const std::string theReversedString = reverseString(stringToReverse);

    std::cout << "The reversed string is: " << theReversedString << '\n';

    return 0;
}
