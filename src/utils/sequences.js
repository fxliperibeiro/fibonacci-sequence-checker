function calculateSum() {
  const INDEX = 12;
  let sum = 0;
  let k = 1;

  while (k < INDEX) {
    k += 1;
    sum += k;
  }

  return sum;
}

function completeSequences() {
  return {
    a: 9,       // Sequência de ímpares
    b: 128,     // Potências de 2
    c: 49,      // Quadrados perfeitos
    d: 100,     // Quadrados de números pares
    e: 13,      // Fibonacci
    f: 20       // Excluindo múltiplos de 3 e números com '3'
  };
}

module.exports = { calculateSum, completeSequences };

