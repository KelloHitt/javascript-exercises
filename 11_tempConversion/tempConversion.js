const convertToCelsius = function (num) {
  let result = (num - 32) * (5 / 9)
  console.log(Math.round(result * 10) / 10);
  return Math.round(result * 10) / 10
};

const convertToFahrenheit = function (num) {
  let result = (num * (9 / 5)) + 32;
  console.log(Math.round(result * 10) / 10);
  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
