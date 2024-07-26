// let number = 5;

// let anotherNumber = '5';

// // console.log(number * anotherNumber);

// // console.log(number > anotherNumber);
// console.log(number === anotherNumber);
// console.log(number <= anotherNumber);

let isSunny = false;
const WEATHER_MESSAGE = isSunny ? "Grab your sunglasses" : "Stay home";
console.log(WEATHER_MESSAGE);

function testSunny(isSunny) {
  let result;
  if (isSunny == true) {
    result = "Grab your sunglasses";
  } else {
    result = "Stay home";
  }
  return result;
}
console.log(testSunny());
