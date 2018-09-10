export default function getPrimeFactors(num) {
  if (!num || typeof num !== 'number' || num < 1 || Math.floor(num) !== num) {
    throw new Error(`${num} is not a positive integer`);
  }

  const primesOtherThan1 = [];
  const primeFactors = { 1: 1 };
  let remainingToFactor = num;

  for (let i = 2; i <= remainingToFactor; i += 1) {
    const isPrime = !primesOtherThan1.some(prime => i % prime === 0);
    if (isPrime) {
      primesOtherThan1.push(i);

      if (remainingToFactor % i === 0) {
        primeFactors[i] = 0;
        while (remainingToFactor % i === 0) {
          primeFactors[i] += 1;
          remainingToFactor /= i;
        }
      }
    }
  }
  if (remainingToFactor !== 1) primeFactors[remainingToFactor] = 1;

  return primeFactors;
}
