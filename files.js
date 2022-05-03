"use strict"

/*  You are given the string "143223". In this string are instructions for a return string. 
     *  Each instruction consists of two numbers. The first number describes the number that 
     *  will be printed. The second number describers the number of times to print the first 
     *  number. The answer for the string provided is "111133222". Implement a method below to 
     *  receive a string in this format, process it and return the result.
    */
   function App(str){
       let holder = [];  /// hold the a return string
        const strings = str.split('');  /// create a new array of the string
      
       for(let i = 0; i < strings.length; i++){  // first loop to create difference between even and odd address
      
        for(let j = 0; j < +strings[((2 * i) + 1)]; j++ ){   // repeating the first number
            if((((2 * i) + 1))  < strings.length ){
               
                holder.push(strings[((2 * i) )])  /// push items to the array
            }
         }
       }
       return holder.join('');   /// changing array to string
   }
  console.log( App('143223'))  /// output by calling a function.