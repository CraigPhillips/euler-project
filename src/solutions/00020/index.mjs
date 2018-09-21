import { multiplyStrings } from '../../string-math';

export const answer = 648;

export function sumFactorialDigits(n) {
  let stringifiedFactorial = '1';
  let factorialDigitSum = 0;
  for (let i = 2; i <= n; i += 1) {
    stringifiedFactorial = multiplyStrings(stringifiedFactorial, i.toString());
  }
  for (let i = 0; i < stringifiedFactorial.length; i += 1) {
    factorialDigitSum += parseInt(stringifiedFactorial[i], 10);
  }

  return { factorialDigitSum, stringifiedFactorial };
}

export function solve() {
  const oneHundred = 100;

  return sumFactorialDigits(oneHundred).factorialDigitSum;
}
