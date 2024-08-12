let numbers = [1, 3, 4, 5, 6, 7];

// iteration methods

// forEach

const print = (number) => {
  console.log(number);
};

numbers.forEach((number) => {
  console.log(number * number);
});

// map

let squared = numbers.map((number) => {
  return number * number;
});

console.log(squared);

// find

let numberBiggerThan20 = squared.find((number) => {
  if (number > 20) {
    return true;
  } else {
    return false;
  }
});

console.log(numberBiggerThan20);

//filter

let numbersBiggerThan20 = squared.filter((number) => {
  if (number > 20) {
    return true;
  } else {
    return false;
  }
});

console.log(numbersBiggerThan20);

let numbersBiggerThan20Map = squared.map((number) => {
  if (number > 20) {
    return true;
  } else {
    return false;
  }
});

console.log(numbersBiggerThan20Map);
