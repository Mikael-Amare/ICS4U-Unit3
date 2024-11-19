#include <iostream>
#include <string>

using namespace std;

/**
 * Reverses a string using recursion.
 * @param stringToReverse The string to reverse.
 * @return The reversed string.
 */
string reverseString(const string& stringToReverse) {
    if (stringToReverse.empty()) {
        return "";
    } else {
        char firstCharacter = stringToReverse[0];
        string restOfString = stringToReverse.substr(1); // Get the rest of the string
        return reverseString(restOfString) + firstCharacter;
    }
}

int main() {
    // Prompt the user for input
    string stringToReverse;
    cout << "Enter a string: ";
    getline(cin, stringToReverse); // Use getline to handle spaces in input

    cout << "The original string is: " << stringToReverse << endl;

    // Call the reverseString function
    string theReversedString = reverseString(stringToReverse);
    cout << "The reversed string is: " << theReversedString << endl;

    return 0;
}