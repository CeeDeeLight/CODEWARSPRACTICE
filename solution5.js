/*Write a function that calculates the avg of the numbers in a given list */
function find_average(array) {
    let sum = array.reduce((a,b) => a + b, 0);
    let avg = (sum / array.length) || 0;// your code here
    return avg;
}  