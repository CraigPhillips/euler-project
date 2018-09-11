export default function getPrimesUnder(cap) {
  const checkedForPrimes = {};
  const primes = [];
  for (let i = 2; i < cap; i += 1) {
    if (!checkedForPrimes[i]) {
      primes.push(i);
      for (let j = i * 2; j < cap; j += i) checkedForPrimes[j] = true;
    }
  }

  return primes;
}
