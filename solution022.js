/* Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase
in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each 
uppercase letter becomes lowercase. */

String.prototype.toAlternatingCase = function () {

    let newstr = "";      
   
   for(let i = 0; i < this.length; i++) { 
     
     if (this[i] === this[i].toUpperCase()){  
       
       newstr += this[i].toLowerCase();     
     } else {      
       newstr += this[i].toUpperCase();      
     }
   }
   return newstr;
   }