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
    if (isPrime(elem)) {
      primefactors.push(elem);
    } 
  return primefactors[primefactors.length - 1];
}

console.log(largestPrimeFactor(7));

// Firstly, I know I can do this in less lines of code but I got the thing to work finally ;) pls no hate etc etc
// 1) create a function to determine if number is prime
// 2) create a second function
// 3) create two arrays, one to store factors and one to store prime factors (one is always the inital number)
// 4) find the factors
// 5) iterate through the factors to find which is prime
// 6) return the last element of the prime factors array

//Problem solved 08/10/2019 by a very tired Cam.
