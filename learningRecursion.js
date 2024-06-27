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
  else {
    return base * power(base, exponent - 1);
  }
}

// exercise 2 done, works
