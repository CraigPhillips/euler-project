export const answer = 6857;

export function getPrimeFactors(num) {
  if (!num || typeof num !== 'number' || num < 1 || Math.floor(num) !== num) {
    throw new Error(`${num} is not a positive integer`);
  }

  const primesOtherThan1 = [];
  const primeFactors = [1];
  let remainingToFactor = num;

  for (let i = 2; i <= remainingToFactor; i += 1) {
    const isPrime = !primesOtherThan1.some(prime => i % prime === 0);
    if (isPrime) {
      primesOtherThan1.push(i);

      if (remainingToFactor % i === 0) {
        while (remainingToFactor % i === 0) {
          remainingToFactor /= i;
        }

        primeFactors.push(i);
      }
    }
  }
  if (remainingToFactor !== 1) primeFactors.push(remainingToFactor);

  return primeFactors;
}

export function solve() {
  const target = 600851475143;

  const primesFactors = getPrimeFactors(target);
  return primesFactors[primesFactors.length - 1];
}
