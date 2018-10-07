import { getAllFactors } from '../../../../factoring';

export const answer = 4179871;

export function getFactorSum(num) {
  return getAllFactors(num).reduce(
    (sum, factor) => (factor === num ? sum : sum + factor),
    0,
  );
}

export function getAbundancyCategoriesUpTo(cap) {
  const abundancies = {
    abundant: [],
    deficient: [],
    perfect: [],
  };
  for (let i = 1; i <= cap; i += 1) {
    const factorSum = getFactorSum(i);
    if (factorSum < i) abundancies.deficient.push(i);
    else if (factorSum > i) abundancies.abundant.push(i);
    else abundancies.perfect.push(i);
  }
  return abundancies;
}

export function solve() {
  const maxProvableNonAbundantSum = 28123;
  const { abundant } = getAbundancyCategoriesUpTo(maxProvableNonAbundantSum);

  const isAbundantSummable = [];
  for (let i = 0; i < abundant.length; i += 1) {
    for (let j = i; j < abundant.length; j += 1) {
      isAbundantSummable[abundant[i] + abundant[j]] = true;
    }
  }
  const nonAbundantSummable = [];
  for (let i = 1; i <= maxProvableNonAbundantSum; i += 1) {
    if (!isAbundantSummable[i]) nonAbundantSummable.push(i);
  }

  return nonAbundantSummable.reduce((sum, total) => sum + total, 0);
}
