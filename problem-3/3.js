function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function largestPrimeFactor(number) {
  let factors = [];
  let primefactors = [number];
  for (let i = 2; i < number; i++) {
    if (Number.isInteger(number / i)) {
      factors.push(i);
    }
  }
  for (let elem of factors) {
    if (isPrime(elem)) {
      primefactors.push(elem);
    }
  }
  return primefactors[primefactors.length - 1];
}

module.exports = largestPrimeFactor;
