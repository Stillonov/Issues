/*
  Palindrome
*/

export const isPalindrome = (inputString?: string): boolean => {
    if (typeof inputString !== 'string') {
        return false;
    }

    const trimmedString = inputString.trim();

    if (!trimmedString) {
        return false;
    }

    return trimmedString === trimmedString.split('').reverse().join('');
};
