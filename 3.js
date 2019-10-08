function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
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
    if (isPrime(elem) === false) {
      continue;
    } else {
      primefactors.push(elem);
    }
  }
  return primefactors[primefactors.length - 1];
}

console.log(largestPrimeFactor(7));
