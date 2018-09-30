import { getPrimeFactors } from '../../../../factoring';

export const answer = 6857;

export function solve() {
  const target = 600851475143;

  const primesFactors = Object.keys(getPrimeFactors(target));
  return parseInt(primesFactors[primesFactors.length - 1], 10);
}
