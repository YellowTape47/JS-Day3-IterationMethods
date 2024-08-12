//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

////////// Task 1 //////////

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

// Q1

let greaterThanOrEqual25 = numbers.filter((n) => {
  //   if (n >= 25) {
  //     return true;
  //   }
  return n >= 25;
});
console.log(greaterThanOrEqual25);

// Q2

let divisibleBy5 = numbers.filter((n) => {
  if (n % 5 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log("this is divisible by 5", divisibleBy5);

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/

// Q3
let squared = numbers.map((numbers) => {
  return numbers * numbers;
});
console.log(squared);

// Q4
let multipleBy2 = numbers.map((numbers) => {
  return numbers * 2;
});
console.log(multipleBy2);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/

// Q5
let greaterOrEqual20 = numbers.filter((num) => {
  if (num >= 20) {
    return true;
  } else {
    return false;
  }
});
console.log(greaterOrEqual20);
let greaterOrEqual20Sq = greaterOrEqual20.map((num) => {
  return num * num;
});
console.log(greaterOrEqual20Sq);

// Q6
const divisibleBy5Q6 = numbers.filter((num) => {
  if (num % 5 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(`this is question 6 --> ${divisibleBy5Q6}`);
let divisibleBy5AndMultipleBy5 = divisibleBy5.map((num) => {
  return num * 3;
});
console.log(divisibleBy5AndMultipleBy5);
