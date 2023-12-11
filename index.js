// Helper function to clean the string (remove non-letter characters and convert to lowercase)
function cleanString(str) {
  return str.replace(/[^a-z]/g, '').toLowerCase();
}

// Main function to check if a string is a palindrome
function isPalindrome(str) {
  const cleanedStr = cleanString(str);
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

// Example test cases
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("robot")); // false


module.exports = isPalindrome;
