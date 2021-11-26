function fiboEvenSum(maximumInt) {
  let result = [1, 2];
  const exitInt = maximumInt - 2;
  for (let i = 0; i < exitInt; i++) {
    let sum = result[result.length - 1] + result[result.length - 2];
    result.push(sum);
  }
  return result.filter((int) => int % 2 === 0 && int < maximumInt).reduce((a, b) => a + b);
}

module.exports = fiboEvenSum;
