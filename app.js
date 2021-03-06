'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"The sum of 4 and 7 is 11."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a,b){
  var sumArray = [a + b,'The sum of ' + a + ' and ' + b + ' is ' + (a + b) + '.'];
  return sumArray;
}

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle.

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"The product of 4 and 7 is 28."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a,b) {
  var multiplyTotal = [a * b, 'The product of ' + a + ' and ' + b + ' is ' + (a * b) + '.'];
  return multiplyTotal;
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(4,7);

// Once you get the test passing, do an a-c-p cycle.

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:
Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a,b,c){
  var total = [(a + b + c), (a * b * c), a + ' and ' + b + ' and ' + c + ' sum to ' + (a + b + c) + '.', 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + (a * b * c) + '.'];
  return total;
}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle.

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"2,3,4 was passed in as an array of numbers, and 9 is their sum."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
function sumArray(numbers) {
  var sumTotal = 0;
  for(var i = 0; i < numbers.length; i++){
    sumTotal += numbers[i];
  }
  var sumTotalArray = [sumTotal, numbers + ' was passed in as an array of numbers, and ' + sumTotal + ' is their sum.'];

  return sumTotalArray;
}

// Here is the test for sumArray(); uncomment it to run it
var testArray = [2,3,4];
testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle.

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"The numbers 2,3,4 have a product of 24."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(numbers){
  var productTotal = numbers[0];
  for(var i = 1; i < numbers.length; i++){
    productTotal *= numbers[i];
  }
  var productTotalArray = [productTotal, 'The numbers ' + numbers + ' have a product of ' + productTotal + '.'];
  return productTotalArray;
}
// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle.


/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

function testSum() {
  if (sum(4,7)[1] === 'The sum of 4 and 7 is 11.') {
    console.log('%c TEST FOR sum() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR sum() FAILS', 'color: red');
  }
}

function testMultiply() {
  if (multiply(5,9)[1] === 'The product of 5 and 9 is 45.') {
    console.log('%c TEST FOR multiply() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR multiply() FAILS', 'color: red');
  }
}

function testSumAndMultiply() {
  if (sumAndMultiply(4, 7, 5)[2] === '4 and 7 and 5 sum to 16.' && sumAndMultiply(4, 7, 5)[3] === 'The product of 4 and 7 and 5 is 140.') {
    console.log('%c TEST FOR sumAndMultiply() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR sumAndMultiply() FAILS', 'color: red');
  }
}

function testSumArray() {
  if (sumArray(testArray)[1] === '2,3,4 was passed in as an array of numbers, and 9 is their sum.') {
    console.log('%c TEST FOR sumArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR sumArray() FAILS', 'color: red');
  }
}

function testMultiplyArray() {
  if (multiplyArray(testArray)[1] === 'The numbers 2,3,4 have a product of 24.') {
    console.log('%c TEST FOR multiplyArray() PASSES', 'color: green');
  } else {
    console.log('%c TEST FOR multiplyArray() FAILS', 'color: red');
  }
}
