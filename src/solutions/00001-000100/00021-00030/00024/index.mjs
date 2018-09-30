import { getNextLexographicPermutation } from '../../../../combinatorics';

export const answer = 2783915460;

export function solve() {
  let nextPermutation = '0123456789';
  const millionthPermutation = 1000000;

  for (let i = 1; i < millionthPermutation; i += 1) {
    nextPermutation = getNextLexographicPermutation(nextPermutation);
  }

  return parseInt(nextPermutation, 10);
}
