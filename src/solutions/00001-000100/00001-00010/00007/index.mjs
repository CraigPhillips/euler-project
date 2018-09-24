import getPrimes from '../../../../primes/getPrimes';

export const answer = 104743;

export function solve() {
  const tenThousandFirst = 10001;
  const primes = getPrimes(tenThousandFirst);
  return primes[primes.length - 1];
}
