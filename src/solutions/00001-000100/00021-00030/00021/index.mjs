import { getAllFactors } from '../../../../factoring';

export const answer = 31626;

export function findAmicablesUnder(cap) {
  const amicablePairs = {};
  for (let i = cap - 1; i > 1; i -= 1) {
    if (!amicablePairs[i]) {
      let properDivisors = getAllFactors(i);
      properDivisors.length -= 1;
      const iDivisorSum = properDivisors.reduce((soFar, div) => soFar + div, 0);

      if (iDivisorSum < cap && i !== iDivisorSum) {
        properDivisors = getAllFactors(iDivisorSum);
        properDivisors.length -= 1;
        const possibleAmicableDivisorSum = properDivisors
          .reduce((soFar, div) => soFar + div, 0);
        if (possibleAmicableDivisorSum === i) {
          amicablePairs[iDivisorSum] = i;
        }
      }
    }
  }
  return amicablePairs;
}

export function solve() {
  const tenThousand = 10000;

  return Object
    .entries(findAmicablesUnder(tenThousand))
    .reduce((soFar, [ami1, ami2]) => soFar + parseInt(ami1, 10) + ami2, 0);
}
