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
// function opposite(number) {
//     return -number
//   }



//11. Remove First and Last Character
// function removeChar(str){
//     return str.slice(1, -1)
//    };



//12. Square(n) Sum
//Complete the square sum function so that it squares each number passed into it and then sums the results together.
// function squareSum(numbers){
//     return numbers.reduce((acc, num)=> acc + (num*num), 0)
// }
// function squareSum(numbers){
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i] * numbers[i]
//     }
//     return sum
// }


//13. String repeat
// function repeatStr (n, s) {
//     return s.repeat(n);
// }

// const repeatStr = (n,s) => s.repeat(n)


//14. Grasshopper - Summation
//Write a program that finds the summation of every number from 1 to num. 
//The number will always be a positive integer greater than 0. 
//Your function only needs to return the result, what is shown between parentheses 
//in the example below is how you reach that result and it's not part of it, see the sample tests.

//через цикл

// let summation = function (num) {       5 + 1 + 2 + 3 + 4 = 15
//     let sum = 0;
//     for(let i = 1; i <= num; i++){
//       sum += i
//     }
//     return sum
//   }
//   console.log(summation(5));

//по формуле
// var summation = function (num) {    5 * (5 + 1) / 2 = 15
//  return num * (num + 1) / 2;
// }
// console.log(summation(5));


//15. Remove String Spaces
// function noSpace(x){
//     return x.replaceAll(' ', '')
// }
//function noSpace(x){
//     return x.split(' ').join('')
// }


//16. Find the smallest integer in the array
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args)
//     }
//   }

//17. Counting sheep...
// function countSheeps(sheep) {
//     let sum = 0;
//     for(let i = 0; i < sheep.length; i++){
//       if(sheep[i]){
//         sum ++
//       }
//     }
//     return sum
//   }

//function countSheeps(sheep) {
//  return sheeps.filter(Boolean).length;
//}

//18. Convert a String to a Number!
// const stringToNumber = (str) => Number(str)



//19. Basic Mathematical Operations
//Your task is to create a function that does four basic mathematical operations.
//The function should take three arguments - operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.

// function basicOp(operation, value1, value2) {
//     switch (operation) {
//         case '+': return value1 + value2;
//         case '-': return value1 - value2;
//         case '*': return value1 * value2;
//         case '/': return value1 / value2;
//     }
// }


//20.Keep Hydrated!
//Nathan loves cycling.
//Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.Nathan loves cycling.
//Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// function litres(time) {
//     return Math.floor(time * 0.5);
//   }


//21. Century From Year
// const century = (year) => Math.ceil(year/100)

//22. Abbreviate a Two Word Name
//Sam Harris => S.H
// function abbrevName(name){
//     let array = name.split(' ');
//     return (array[0][0] + "." + array[1][0]).toUpperCase()
//   }


// function abbrevName(name){
//     return name.split(' ').map(i => i[0].toUpperCase()).join('.')
// }

//22. Convert number to reversed array of digits
// function digitize(n) {
//     return String(n).split('').reverse().map(Number)
//   }


//23. Is n divisible by x and y
// function isDivisible(n, x, y) {
//     //   if(n%x===0 && n%y===0){
//     //      return true
//     //      } else {
//     //     return false
//     //   }
//       return (n%x===0 && n%y===0) ? true : false
//     }


//24.A Needle in the Haystack
// function findNeedle(haystack) {
//     //   for(let i = 0; i < haystack.length; i++){
//     //     if(haystack[i] === "needle") {
//     //       return "found the needle at position " + i
//     //     }
//     //   }
//       return "found the needle at position " + haystack.indexOf('needle')
//     }

//25. Function 1 - hello world
// const greet = () => {
//     return "hello world"
// }


//26. Opposites Attract
//Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
// function lovefunc(flower1, flower2){
//     return flower1 % 2 !== flower2 % 2 ? true : false
//   }

//   function lovefunc(flower1, flower2){
//     if(flower1 % 2 === 0 && flower2 %2 === 1) return true
//     if (flower2 % 2 === 0 && flower1 % 2 === 1) return true
//     return false
//   }

//27.Beginner - Lost Without a Map
//Given an array of integers, return a new array with each value doubled.
// function maps(x){
//     return x.map(el => el*2)
// }


//28.Beginner Series #1 School Paperwork
//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
//Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// function paperwork(n, m) {
//     if(n>=0 && m>=0) return n*m
//     if(n<0 || m<0) return 0
//   }

// function paperwork(n, m) {
//     return n > 0 && m > 0 ? n * m : 0
//   }



//29. Convert a Boolean to a String
// function booleanToString(b){
//     return b.toString()
// }


//30. 
// function areYouPlayingBanjo(name) {
//     return name[0] === "R" || name[0] === "r" ? name + " plays banjo" : name + " does not play banjo"
//   }


//31.Your task is to write a function which returns the time since midnight in milliseconds.
// function past(h, m, s){
//   return (h*3600 + m*60 + s)*1000
// }


//32. Calculate average
//Write a function which calculates the average of the numbers in a given list.
// function findAverage(array) {
  // if(array.length === 0){
  //   return 0
  // }
//   let sum = 0;
//   for(let i = 0; i < array.length; i++){
//     sum += array[i]
//   }
//   return sum / array.length
// }

//return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length


//33. How good are you really?
//You receive an array with your peers' test scores. Now calculate the average and compare your score! Return True if you're better, else False!

// function betterThanAverage(classPoints, yourPoints) {
// let sum = 0;
// for(let i = 0; i < classPoints.length; i++) {
//   sum += classPoints[i]
// }
// let classAvg = sum / classPoints.length

// return yourPoints > classAvg
// }

// function betterThanAverage(classPoints, yourPoints) {
//   const classAvg = classPoints.reduce((acc,num) => acc + num) / classPoints.length
//   return yourPoints > classAvg
// }



//34.Sum Arrays
// function sum (numbers) {
//   let sum = 0;
//   for(let i = 0; i < numbers.length; i++){
//     sum += numbers[i]
//   }
//   return sum
// };
// return numbers.reduce((acc, num) => acc + num, 0)


//35. Invert values

// function invert(array) {
//   return array.map(num=>num*(-1))
// }


//36. This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
// function simpleMultiplication(number) {
//   return number%2 === 0 ? number*8 : number*9
// }


//37.Count of positives / sum of negatives
// function countPositivesSumNegatives(input) {
//   if(input === null || input.length === 0){
//     return []
//   }
//   let positives = 0;
//   let negatives = 0;
//   for(let i = 0; i < input.length; i++){
//     if(input[i] > 0){
//       positives += 1
//     } else {
//       negatives += input[i]
//     }
//   } return [positives, negatives]
// }

//38. You only need one - Beginner
//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
//Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not.
// function check(a, x) {
//   return a.includes(x)
// }


//39.Fake Binary
//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// function fakeBin(x){
//   return x.split('').map(el => el>=5 ? 1 : 0).join('')
// }


//7 kyu



//40. Count the divisors of a number
//Count the number of divisors of a positive integer n. Random tests go up to n = 500000.
// function getDivisorsCnt(n){
//   let result = 0;
//   for(let i = 1; i <= n; i++){
//     if(n % i===0){
//       result++
//     }
//   }
//   return result
// }
// ЭТОТ СЛИШКОМ ДОЛГИЙ

// function getDivisorsCnt(n){
//   let result = 0;
//   if(n % Math.sqrt(n) == 0){
//       result++
//     }
//   for(let i = 0; i < Math.sqrt(n); i++){
//     if(n%i === 0){
//       result += 2
//     }
//   }
//   return result
// }


// 41.Vowel Count
//Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y).
//The input string will only consist of lower case letters and/or spaces.

// const vowelStr = "aeiou"
// function getCount(str) {
//   return [...str].reduce((acc, el) => {
//     if(vowelStr.indexOf(el) !== -1){
//       acc++
//     } return acc
//   }, 0)
// }
//bes practice:
// function getCount(str) {
//   return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
//  }

//42.Disemvowel Trolls   Удалить гласные из троки. Решается регулярным выражением
// function disemvowel(str) {
//   return str.replace(/[aeuio]/gi,'');
// }