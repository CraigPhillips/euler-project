import { addStrings } from '../../../../string-math';

export const answer = 4782;

export function getFirstFibWithDigits(digits) {
  let fibNMinus2 = '1';
  let fibNMinus1 = '1';
  let nextFib = '2';
  let nextI = 3;

  while (nextFib.length < digits) {
    nextI += 1;
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = nextFib;
    nextFib = addStrings(fibNMinus2, fibNMinus1);
  }

  return { fibI: nextI, fib: nextFib };
}

export function solve() {
  const oneThousandDigits = 1000;
  return getFirstFibWithDigits(oneThousandDigits).fibI;
}
