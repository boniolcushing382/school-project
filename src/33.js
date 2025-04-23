function calculateGCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function isPerfectSquare(num) {
  const sqrt = Math.sqrt(num);
  if (sqrt === Math.floor(sqrt)) {
    return true;
  } else {
    return false;
  }
}

function reverseString(str) {
  return str.split('').reverse().join('');
}
