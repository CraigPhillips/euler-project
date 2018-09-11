export const answer = 104743;

// this is essentially using the Sieve of Eratosthenes to find primes which
// is not as efficient as wheel sieves or the sieve of Atkin but I didn't take
// the time to get into those
export function getPrimes(n) {
  const primes = [];
  const isPrime = num => !primes.some(toTest => num % toTest === 0);
  for (let i = 2; primes.length < n; i += 1) if (isPrime(i)) primes.push(i);
  return primes;
}

export function solve() {
  const tenThousandFirst = 10001;
  const primes = getPrimes(tenThousandFirst);
  return primes[primes.length - 1];
}
