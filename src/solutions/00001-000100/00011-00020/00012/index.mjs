import { getPrimeFactors } from '../../../../factoring';

export const answer = 76576500;

export function getFirstTriangularNumberWithFactorCountOver(n) {
  let nextTriangular = 0;
  let triangularCount = 0;
  let factorCount = 0;
  let factors;

  while (factorCount <= n) {
    triangularCount += 1;
    nextTriangular += triangularCount;
    // stolen from https://projecteuler.net/overview=012
    // the idea is that you can get the number of factors in a number by
    // getting the prime factors and then counting how many times each of those
    // prime factors are used
    const primeFactors = getPrimeFactors(nextTriangular);
    factorCount = Object.values(primeFactors)
      .reduce((soFar, count) => soFar * (count + 1), 1);
  }

  return { factors, number: nextTriangular, triangularCount };
}

export function solve() {
  const fiveHundredFactors = 500;
  return getFirstTriangularNumberWithFactorCountOver(fiveHundredFactors)
    .number;
}
