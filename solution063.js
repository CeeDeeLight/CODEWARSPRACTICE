/* function capitalizeWord(word) {
    word[0].toUpperCase();
    return word;
  } */
  
  function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
  }