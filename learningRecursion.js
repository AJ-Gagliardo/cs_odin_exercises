console.log("hi");

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
