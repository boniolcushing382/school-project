function squareRoot(value) {
  if (value > 0) {
    let root = Math.sqrt(value);
    console.log(`The square root of ${value} is: ${root}`);
  } else {
    console.log("Error: Invalid input.");
  }
}
