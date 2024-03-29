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


//////////////////////////////-------------7  KYU-------------//////////////////////////////



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

// let vowelString = 'aeiou'
// const getCount = (str) => {
//   let vowelCount = 0;
//   str.split('').forEach(el => {
//     if(vowelString.indexOf(el) !== -1){
//       vowelCount++
//     }
//   })
//   return vowelCount
// }


//42.Disemvowel Trolls   Удалить гласные из троки. Решается регулярным выражением
// function disemvowel(str) {
//   return str.replace(/[aeuio]/gi,'');
// }


//43. Square Every Digit
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// function squareDigits(num){
//   let strNum = String(num)
//   let result = "";
//   for(let i = 0; i < strNum.length; i++){
//     result += strNum[i]**2
//   }
//   return Number(result)
// }
// //или
// const squareDigits = (num) => +String(num).split('').map(el => el ** 2).join('')

//return +num.toString().split('').map(i => i*i).join('');

//44. Highest and Lowest
//highAndLow("1 2 3 4 5");  // return "5 1"
// function highAndLow(numbers){
//   let strArr = numbers.split(' ')
//   let maxVal = Math.max(...strArr)
//   let minVal = Math.min(...strArr)
//   return `${maxVal} ${minVal}`
// }

// const highAndLow = (numbers) => `${Math.max(...numbers.split(' '))} ${Math.min(...numbers.split(' '))}`

// function highAndLow(numbers){
//   numbers = numbers.split(' ');
//   return Math.max(...numbers) + ' ' + Math.min(...numbers);
// }


//45. Descending Order
//Input: 42145 Output: 54421
//const descendingOrder = (n) => Number([...String(n)].sort((a,b) => b - a).join(''))



//46.List Filtering
//filter_list([1,2,'a','b']) == [1,2]
// function filter_list(l) {
//   return l.filter(el => typeof el == "number")
// }


//47.Mumbling
//accum("abcd") -> "A-Bb-Ccc-Dddd"
//const accum = (s) => s.split('').map((el, num) => (el.toUpperCase() + el.toLowerCase().repeat(num))).join('-')



//48. You're a square!
//-1  =>  false
//4  =>  true
// let isSquare = (n) => {
//   let value = Math.floor(Math.sqrt(n))
//   if(value ** 2 == n){
//     return true
//   } else {
//     return false
//   }
// }


//49. Isograms
//isIsogram "Dermatoglyphics" = true  isIsogram "moose" = false


//50.
//Exes and Ohs
//Check to see if a string has the same amount of 'x's and 'o's. 
//The method must return a boolean and be case insensitive. The string can contain any char.
//XO("ooxXm") => true
//XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// function XO(str) {
//   let arr = str.toLowerCase().split('')
//   return arr.filter(el=> el == 'x').length == arr.filter(el=> el == 'o').length
// }

//51.Jaden Casing Strings
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// String.prototype.toJadenCase = function () {
//   return this.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
// };


//52.Shortest Word
//Simple, given a string of words, return the length of the shortest word(s).
// const findShort = (s) => Math.min(...s.split(' ').map(s=>s.length))


//53.Credit Card Mask
//"4556364607935616" --> "############5616"
// "64607935616"     --> "#######5616"
//"1"                --> "1"
// const maskify = cc => cc.slice(-4).padStart(cc.length, '#')


//54.Sum of two lowest positive integers
// const sumTwoSmallestNumbers =(numbers) => {
//   numbers.sort((a,b) => a - b)
//   let res = numbers[0] + numbers[1]
//   return res
// }


//55.Beginner Series #3 Sum of Numbers
//(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// const getSum = (a, b) => {
//   let min = Math.min(a,b) //1
//   let max = Math.max(a,b) //3
//   return (max - min + 1) * (max + min) / 2
//  }


//56. Two to One
//a = "xyaabbbccccdefww"
//b = "xxxxyyyyabklmopq"
//longest(a, b) -> "abcdefklmopqwxy"
// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// function longest(s1, s2) {
//   let str = new Set([...s1, ...s2]);
//   return [...str].sort().join('');
//   }


//57.Friend or Foe?
//Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// const friend = (friends) => friends.filter(f => f.length === 4)


//58.Categorize New Member
//input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
//output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
// function openOrSenior(data){
//   return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? "Senior" : "Open")
// }


//59.Find the next perfect square!
//121 --> 144
//114 --> -1 since 114 is not a perfect square
// function findNextSquare(sq) {
//   if(Math.sqrt(sq)%1 === 0){
//     return (Math.sqrt(sq)+1)**2
//   } else {
//       return -1;
//   }
// }


//60. Printer Errors
//s="aaabbbbhaijjjm"
//printer_error(s) => "0/14"

//s="aaaxbbbbyyhwawiwjjjwwm"
//printer_error(s) => "8/22"

// function printerError(s) {
//   let count = 0;
// for(let i = 0; i < s.length; i++){
//   if(s[i] > 'm'){
//     count++
//   }
// }
// return count + "/" + s.length
// }

// function printerError(s) {
//   let b = Array.from(s).filter(letter => letter > "m");
//   return b.length+"/"+s.length;
// }


// const foo = () => {
//   const randomNum = Math.random()*11
//   const result = Math.round(randomNum)
//   return result
// }

// const a = foo()
// console.log(a);

// // function getRandomNumber() {
// //   return Math.floor(Math.random() * 11);
// // }

// // const randomNumber = getRandomNumber();
// // console.log(randomNumber);


//61. 6kyu
//Multiples of 3 or 5
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
//Additionally, if the number is negative, return 0.
//Note: If the number is a multiple of both 3 and 5, only count it once.
// function solution(number){
//   let sum = 0;
//   for(let i = 0; i < number; i++){
//     if(i % 3 == 0){
//       sum += i
//       continue
//     }
//     if(i % 5 == 0){
//       sum += i
//       continue
//     }
//     else { continue}
//   }
//   return sum
// }
// function solution(number){
//   sum = 0
//   for (i = 3; i < number; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

//62.Stop gninnipS My sdroW!
//Write a function that takes in a string of one or more words, 
//and returns the same string, but with all words that have five 
//or more letters reversed (Just like the name of this Kata). 
//Strings passed in will consist of only letters and spaces. 
//Spaces will be included only when more than one word is present.
//"Hey fellow warriors"  --> "Hey wollef sroirraw" 

// const spinWords = (string) => {
//   let arrString = string.split(' ')
//   let reverseString = (str) => {
//     return str.split("").reverse().join("")
//   }
//   for(let i = 0; i < arrString.length; i++){
//     if(arrString[i].length >= 5){
//       const word = arrString[i]
//       arrString[i] = reverseString(word)
//     }
//   }
//   return arrString.join(' ')
// }

// function spinWords(words){
//   return words.split(' ').map(function (word) {
//     return (word.length > 4) ? word.split('').reverse().join('') : word;
//   }).join(' ');
// }

// function spinWords(str){
//   return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
// }


//63. Find the odd int
//Given an array of integers, find the one that appears an odd number of times.
//There will always be only one integer that appears an odd number of times.
//[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// function findOdd(A) {
//   let count = {};
//  A.forEach(v => {
//    count[v] = count[v] ? count[v] + 1 : 1;
//  });
//  return +Object.keys(count).find(key => count[key] % 2 === 1);
// }

// function findOdd(arr) {
//   return arr.find((item, index) => arr.filter(el => el == item).length % 2)
// }





//64.Who likes it?
//You probably know the "like" system from Facebook and other pages. 
//People can "like" blog posts, pictures or other items. 
//We want to create the text that should be displayed next to such an item.
//Implement the function which takes an array containing the names of people 
//that like an item. It must return the display text as shown in the examples:
// function likes(names) {
//   if(names.length == 0){
//     return "no one likes this"
//   } else if(names.length == 1){
//     return names[0] + " likes this"
//   } else if(names.length == 2){
//     return names[0] + " and " +  names[1] + " like this"
//   } else if(names.length == 3){
//     return names[0] + ", " +  names[1] + " and " + names[2] + " like this"
//   } else {
//     return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this"
//   }
// }


//65.createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// function createPhoneNumber(numbers){
//   return "(" + `${numbers[0]}${numbers[1]}${numbers[2]}` + ")" + " " + `${numbers[3]}${numbers[4]}${numbers[5]}` + "-" + `${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
// }
function createPhoneNumber(numbers){
  numbers.unshift("(");
  numbers.splice(4, 0, ")", " ");
  numbers.splice(9, 0, "-");
  return numbers.join("");
}