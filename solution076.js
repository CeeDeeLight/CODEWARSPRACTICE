/*Is it a Palindrome?*/
function isPalindrome(x) {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}