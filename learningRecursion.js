console.log("hi");

console.log(
  `Exercises from https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion`
);

/*
Question 1: Sum all numbers
Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.

*/

//my logic

/*
function(n){
n * function (n-1)

}

// example
function(3){
3 * (3-1){
    2 * (2-1)
}
}

// but first case base when n > 1 , return

*/

function sumRange(n) {
  if (n === 1) return 1;
  else return n + sumRange(n - 1);
}

// The function above works~

/*

///Question 2: Power function////
Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

Sample:

console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4 
console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1


*/

function power(base, exponent) {
  //base case
  if (exponent === 0) return 1;
  //recursion
  else {
    return base * power(base, exponent - 1);
  }
}

// exercise 2 done, works


// Exercise 3

/*
Question 3: Calculate factorial
Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.

Sample:

factorial(5); // 5 * 4 * 3 * 2 * 1 === 120
*/

function factorial(n){
  //base case
  if (n === 0) return 1;
  else return n * factorial(n-1);
}

// exercise 3 done, works well


// Question 5: Product of an array

/*
Write a function called productOfArray which takes in an array of numbers and returns the product of them all

Sample:

var six = productOfArray([1,2,3]) // 6
var sixty = productOfArray([1,2,3,10]) // 60

*/

function productOfArray(arr){

  
  if(arr.length==0){return 1}
  else{
    return arr.shift() * productOfArray(arr);

  }

}