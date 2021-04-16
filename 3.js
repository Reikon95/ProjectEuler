// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of a given number?

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

function largestPrimeFactor(number) {
  let factors = []
  let primefactors = [number]
  for (let i = 2; i < number; i++) {
    if (Number.isInteger(number / i)) {
      factors.push(i)
    }
  }
  for (let elem of factors) {
    if (isPrime(elem)) {
      primefactors.push(elem)
    }
  }
  return primefactors[primefactors.length - 1]
}

// 1) create a function to determine if number is prime
// 2) create a second function
// 3) create two arrays, one to store factors and one to store prime factors (one is always the inital number)
// 4) find the factors
// 5) iterate through the factors to find which is prime
// 6) return the last element of the prime factors array
