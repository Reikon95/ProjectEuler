function isPalidrome(num) {
  let str = String(num);
  let checker = 0
  let backindex = (str.length - 1);
  for (let i = 0; i < str.length; i++) {
    console.log(i);
    console.log(backindex);
    str[i] === str[backindex] ? checker++ : checker--;
    backindex--;
  }
  return checker === str.length ? true : false;
}
console.log(isPalidrome(0000))


function largestPalindromeProduct(n) {
  return true;
}

largestPalindromeProduct(3);

//UNFINISHED
