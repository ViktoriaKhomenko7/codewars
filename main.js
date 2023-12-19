//1. Consider an array/list of sheep where some sheep may be missing from their place. 
//We need a function that counts the number of sheep present in the array (true means present).
//solution
// function countSheeps(sheep) {
//     let result = 0;
//     for (let i = 0; i < sheep.length; i++) {
//         if(sheep[i]) {
//             result++
//         }
//     }
//     return result
// }



// 2. Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// function evenOrOdd(number) {
//     if(number%2===0) {
//       return "Even"
//     } else {
//       return "Odd"
//     }
//   }


// 3. Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// 
//function basicOp(operation, value1, value2){
//     switch(operation) {
//         case "+" : return value1 + value2;
//         case "-" : return value1 - value2;
//         case "*" : return value1 * value2;
//         case "/" : return value1 / value2;
//     } 
//   }


//4.Keep Hydrated
//Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// function litres(time) {
//     return Math.floor(time * 0.5);
// }


//5. Sum of positive
// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.
// function positiveSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (arr[i] > 0) {
//             sum += arr[i]
//         }
//     }
//     return sum
// }

// function positiveSum(arr) {
//     return arr.reduce((sum, num) => sum + (num > 0 ? num : 0), 0)
// }



//6. Return negative
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// function makeNegative(num) {
//     return -Math.abs(num)
// }

// function makeNegative(num) {
//     return num > 0 ? -num : num
// }


//7. Reverse string
// function solution(str){
//     return str.split('').reverse().join('');  
//   }

//8. Convert boolean values to strings 'Yes' or 'No'.
//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
// function boolToWord( bool ){
//     return bool ? "Yes" : "No"
//   }



//9. Convert a Number to a String!
// function numberToString(num) {
//     return num.toString();
//   }


//10. Opposite number
//Very simple, given an integer or a floating-point number, find its opposite.
function opposite(number) {
    return -number
  }