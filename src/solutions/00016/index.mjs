import { multiplyStrings } from '../../string-math';

export const answer = 1366;

export function addDigitsOfPowResult(num, pow) {
  if (pow < 0) throw new Error('can not handle powers less than 0');
  if (pow === 0) return 1;
  const stringified = num.toString();

  let powResult = stringified;
  for (let i = 1; i < pow; i += 1) {
    powResult = multiplyStrings(powResult, stringified);
  }

  return powResult
    .split('')
    .reduce((soFar, next) => soFar + parseInt(next, 10), 0);
}

export function solve() {
  const two = 2;
  const powerOfDigitSumWanted = 1000;

  return addDigitsOfPowResult(two, powerOfDigitSumWanted);
}
