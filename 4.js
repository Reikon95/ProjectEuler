function isPalidrome(num) {
  let str = String(num);
  let checker = 0
  let x = (str.length - 1);
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[x]) {
      checker++;
    } else {
      console.log('dif');
    }
    x--;
  }
  return checker === 6 ? true : false;
}
console.log(isPalidrome(906609))

function largestPalindromeProduct(n) {
  // Good luck!
  return true;
}

largestPalindromeProduct(3);

//UNFINISHED
