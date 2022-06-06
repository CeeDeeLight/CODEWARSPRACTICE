/* build a program that takes a value, integer, and returns a list of its multiples up to another value, limit. 
If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. 
The limit will always be higher than the base.*/

function findMultiples(integer, limit) {
	//your code here:
    return Array(Math.floor(limit/int)).fill(1).map((x,i)=>int*(i+1));
}   