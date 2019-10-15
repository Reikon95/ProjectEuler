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


function findPalidromeProduct(n) {
  let arr = [1]
  for (let i = 0; i < n; i++) {
    arr.push(0)
  }
  let value = (Number(arr.join('')) - 1);
  for (let i = value; i > 0; i--) {
    console.log(i)
    let sum = Number(i * value);
    if (isPalidrome(sum)) {
      return sum;
    } 
  }
}

console.log(findPalidromeProduct(3));


//UNFINISHED
