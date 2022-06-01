/*Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. 
Fortunately, you are good at spotting them. Warn the sheep in front of the wolf that it is about to be eaten. 
Remember that you are standing at the front of the queue which is at the end of the array:
[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1 */

   function warnTheSheep(queue) {
    console.log(queue)
     
   //parameter: an array of strings contain sheeps and a wolf.
   //return: a string that warns sheep about to be eaten "Oi! Sheep number 1! You are about to be eaten by a wolf!"
   //or return: "Pls go away and stop eating my sheep"
   //example: "sheep", "sheep", "wolf"] "Pls go away and stop eating my sheep"
   //example:"sheep", "sheep", "sheep", "wolf", "sheep" "Oi! Sheep number 1! You are about to be eaten by a wolf!"
   //pseudo: use the reverse method for the array, save the reversed array to a variable.  the beginning of the line is at the end of the array. 
   // use the indexof method to find out where wolf is located in the array.
   //the index number will be where the sheep is which would be index 1 and wolf 2
     
     let newQueue = queue.reverse()
     console.log('this is reversed queue' , newQueue)
     //we have to warn sheep number 2 about wolf in 3
     let wolf = newQueue.indexOf('wolf')
     console.log('this is wolf index', wolf)  //I expect the index should be 2. 
     
     if(wolf === 0) {
       return "Pls go away and stop eating my sheep"
     }else{
       return `Oi! Sheep number ${wolf}! You are about to be eaten by a wolf!`
     }
   }   