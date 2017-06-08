 // var name = "Jane";
// var title = "Software Engineer";
// var hourlyWage = 40;

//ES6

 // const is used because we don't expect the name to change
 //let is used when we expect the variable to change, it is more similar to var
const name = "Jane";
let title = "Software Engineer";
let hourlyWage = 40;

// some time later...

 title = 'Senior Software Engineer';
 hourlyWage = 45;


 function count (string) {
     const characters = ['a', 'e', 'i', 'o', 'u'];
     let number = 0;

     for (let i = 0; i < string.length; i++) {
         if (characters.includes(string[i])) {
             number++
         }
     }
     return number;
 }

 console.log(count('aeiobzxceiaipbiox'));