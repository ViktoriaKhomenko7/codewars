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
function basicOp(operation, value1, value2){
    switch(operation) {
        case "+" : return value1 + value2;
        case "-" : return value1 - value2;
        case "*" : return value1 * value2;
        case "/" : return value1 / value2;
    } 
  }
