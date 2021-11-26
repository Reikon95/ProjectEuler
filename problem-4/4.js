function largestPalindromeProduct(n) {
  let startingInt = [];
  let num = null
  for (let i = 0; i < n; i++) {
    startingInt.push('9');    
  }
  num = Number(startingInt.join(''))
  for (let i = num; i > 0; i--) {
    let result = String(i * num);
    let reversed = result.split('').reverse().join('');
    if (result === reversed) {
      console.log(result, reversed)
      return Number(result);
    }
  }
}



largestPalindromeProduct(3);


//UNFINISHED
