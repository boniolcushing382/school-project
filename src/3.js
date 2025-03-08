function getRandomNodeJSCode() {
  const randomInt = Math.floor(Math.random() * 10) + 1;

  if (randomInt % 2 === 0) {
    return 'console.log("Even number");';
  } else {
    return 'console.log("Odd number");';
  }
}
