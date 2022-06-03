/* Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
(.reverse takes a list and reverse the element. the function is declared with a keyword named 
digitize the function takes one input prompter, (n) which is for number. We convert (n) to a string 
giving (n) the radiax of 10, then we turn the string into an array using the .split method.
Each element in the array is converted into string format back to a number. We can then reverse the array.   */

function digitize(n) {
    let x = String(n).split("").reverse().map(Number);
    return x;
  }