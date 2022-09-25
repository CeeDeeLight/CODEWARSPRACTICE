function mango(quantity, price){
    return price * (quantity - Math.floor(quantity / 3));
  }
  //Math.floor function always rounds down and returns the largest integer less than or equal to a given number
  