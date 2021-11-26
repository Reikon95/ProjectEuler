function multiplesOf3and5(number) {
  let counter = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      counter += i;
    }
  }
  return counter;
}

module.exports = multiplesOf3and5;
