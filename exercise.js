//ES5 Map Callback 

function double(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}

//ES2015 Arrow function callback

const doubleArr = arr => arr.map((val) => val * 2);

//replace all functions with arrow function
function squareAndFindEvens(numbers) {
  var squares = numbers.map(function (num) {
    return num ** 2;
  });
  var evens = squares.filter(function (square) {
    return square % 2 === 0;
  });
  return evens;
}

//Refactored
squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0);