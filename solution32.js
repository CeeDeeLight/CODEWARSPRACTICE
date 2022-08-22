/* build a program that takes a value, integer, and returns a list of its multiples up to another value, limit. 
If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. 
The limit will always be higher than the base.*/

function findMultiples(integer, limit) {
	//your code here:
  let arr = [];

  for (let i = 1; i <= limit; i += 1){
    if (integer * i <= limit) {
      arr.push(integer * i);
    }
}
return arr;
}