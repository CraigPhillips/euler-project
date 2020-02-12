import { multiplyStrings, powerStrings } from '../../../../string-math';

export const answer = 9183;

const aMin = 2;
const aCap = 100;
const bMin = 2;
const bCap = 100;

export function solve() {
  const convertedStrings = [];
  const uniques = {};

  for (let i = Math.min(aMin, bMin - 1); i <= Math.max(aCap, bCap); i += 1) {
    convertedStrings[i] = i.toString();
  }

  for (let ai = aMin; ai <= aCap; ai += 1) {
    let currentValue = powerStrings(convertedStrings[ai], convertedStrings[bMin - 1]);

    for (let bi = bMin; bi <= bCap; bi += 1) {
      currentValue = multiplyStrings(currentValue, convertedStrings[ai]);
      uniques[currentValue] = true;
    }
  }

  return Object.keys(uniques).length;
}
