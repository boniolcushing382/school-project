function calculateGCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function sumOfSquares(x, y) {
  return Math.pow(x, 2) + Math.pow(y, 2);
}
