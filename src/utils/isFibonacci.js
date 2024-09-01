function isFibonacci(num) {
  if (num < 0) return false;

  let a = 0;
  let b = 1;

  while (a <= num) {
      if (a === num) return true;
      let temp = a;
      a = b;
      b = temp + b;
  }

  return false;
}

module.exports = { isFibonacci };
