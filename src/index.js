const { isFibonacci } = require('./utils/fibonacci');
const { countLetterA } = require('./utils/stringUtils');
const { calculateSom, completarSequences } = require('./utils/sequencias');

// Verificação de número na sequência de Fibonacci
const num = 13;
console.log(`O número ${num} ${isFibonacci(num) ? 'pertence' : 'não pertence'} à sequência de Fibonacci.`);

// Contagem de letras 'a' em uma string
const str = "Análise de Dados Avançada";
console.log(`A letra 'a' aparece ${countLetterA(str)} vezes na string fornecida.`);

// Soma após o processamento do loop
console.log(`O valor da variável SOMA após o loop é: ${calcularSoma()}`);

// Completar as sequências
const sequencias = completarSequencias();
console.log('Resultados das sequências:');
console.log(`a) 1, 3, 5, 7, ${sequencias.a}`);
console.log(`b) 2, 4, 8, 16, 32, 64, ${sequencias.b}`);
console.log(`c) 0, 1, 4, 9, 16, 25, 36, ${sequencias.c}`);
console.log(`d) 4, 16, 36, 64, ${sequencias.d}`);
console.log(`e) 1, 1, 2, 3, 5, 8, ${sequencias.e}`);
console.log(`f) 2, 10, 12, 16, 17, 18, 19, ${sequencias.f}`);
