function fiboEvenSum(n) {
  let result = [1, 2];
  for (let i = 0; i < (n -1); i++) {
    let sum = (result[result.length - 1] + result[result.length - 2]);
    result.push(sum);
  }
  let counter = 0;
  for (let num of result) {
    if (num % 2 === 0) {
      counter += num;
    }
  }
  return counter;
}

fiboEvenSum(10);

