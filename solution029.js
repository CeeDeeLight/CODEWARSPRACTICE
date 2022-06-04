//Write a function that returns a string in which firstname is swapped with last name.
//nameShuffler('john McClane'); => "McClane john"

function nameShuffler(str){
    const fullName = str.split(" ");  //Use the split method to turn the string into an array. We assign the array to a variable called
    return [fullName [1], fullName [0]].join(" "); 
}
//We know that the array has and will always have two elements. We can manually 
                           //create an array by putting the last element of the fullName array and have as 
                                //the first item in our new array and have the first element of the fullName 
                          //array as the last item.
                                                  //To return the array as a string, we use the join method.
