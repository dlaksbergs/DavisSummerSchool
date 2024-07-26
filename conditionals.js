function testNumbers(numbers) {
  let result;
  if (numbers > 0) {
    result = "number is positive";
  } else {
    result = "number is negative";
  }
  return result;
}
console.log(testNumbers(76876876876876876876876876876876876876876876));
let numbers = -1;
const RESULT = numbers < 0 ? "number is negative" : "number is positive";
console.log(RESULT);
