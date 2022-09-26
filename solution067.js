function powersOfTwo(n){
    return Array.from({length: n + 1}, (a,b) => 2 ** b);
  }