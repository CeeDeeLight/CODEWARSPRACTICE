//Create a class Ball. Ball obj should accept 1 argument for "balltype" when instantialted.
//If no arguments are given, ball obj should instantiate with a "balltype" of "regular"

let Ball = function(ballType){
    this.ballType = ballType || 'regular';
};