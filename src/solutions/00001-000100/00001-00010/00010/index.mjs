import { getPrimesUnder } from '../../../../primes';

export const answer = 142913828922;

export function solve() {
  const twoMillion = 2000000;
  return getPrimesUnder(twoMillion).reduce((soFar, prime) => soFar + prime, 0);
}
