import { getPrimes } from '../../../../primes';

export const answer = -59231;

const aAbsoluteMax = 999;
const bAbsoluteMax = 1000;

export function solve() {
    const primes = getPrimes(bAbsoluteMax + 1);
    let highestPrimeGenCount = { count: -1 };

    for (let a = -1 * aAbsoluteMax; a <= aAbsoluteMax; a += 1) {
        for (let b = -1 * bAbsoluteMax; b <= bAbsoluteMax; b += 1) {
            let nextN = 0;
            while (primes.indexOf(nextN * nextN + a * nextN + b) > -1) {
                nextN++;
            }
            if (nextN > highestPrimeGenCount.count) {
                highestPrimeGenCount = {
                    a,
                    b,
                    count: nextN,
                };
            }
        }
    }

    return highestPrimeGenCount.a * highestPrimeGenCount.b;
}
