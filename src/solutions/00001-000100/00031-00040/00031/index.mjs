export const answer = 73682;

const coinValues = {
  pence1: 1,
  pence2: 2,
  pence5: 5,
  pence10: 10,
  pence20: 20,
  pence50: 50,
  pound1: 100,
  pound2: 200,
};
const allCoins = Object.keys(coinValues);
const calculatedCombos = {};
const overallTarget = 200;

function getCombosToGetToTarget(target, coins) {
  if (target == 0 || coins.length == 0) return [];
  const precalcCacheKey = `${coins.join('-')}-${target}`;
  if (calculatedCombos[precalcCacheKey]) return calculatedCombos[precalcCacheKey];

  const combos = [];

  const largestCoin = coins[coins.length - 1];
  const largestCoinValue = coinValues[largestCoin];
  const maxLargestCoins = Math.floor(target / coinValues[largestCoin]);

  for (let i = 0; i <= maxLargestCoins; i += 1) {
    const remainingToTarget = target - i*largestCoinValue;
    if (remainingToTarget === 0) {
      combos.push({ [largestCoin]: i });
      continue;
    }

    const remainingCombos = getCombosToGetToTarget(remainingToTarget, coins.slice(0, coins.length-1));
    remainingCombos.forEach((combo) => {
      if (i === 0) combos.push(combo);
      else combos.push({ ...combo, [largestCoin]: i });
    });
  }

  calculatedCombos[precalcCacheKey] = combos;
  return combos;
}

export function solve() {
  const combos = getCombosToGetToTarget(overallTarget, allCoins);
  return combos.length;
}
