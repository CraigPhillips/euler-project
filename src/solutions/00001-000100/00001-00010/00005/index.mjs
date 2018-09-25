import getAllPrimeFactors from '../../../../factoring/getAllPrimeFactors';

export const answer = 232792560;

export function getSmallestProductOfPrimeFactors(factors) {
  return Object.entries(factors).reduce(
    (soFar, [factor, count]) => soFar * (parseInt(factor, 10) ** count),
    1,
  );
}

export function solve() {
  const numbersThroughTwenty = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const primeFactors = getAllPrimeFactors(numbersThroughTwenty);
  return getSmallestProductOfPrimeFactors(primeFactors);
}
