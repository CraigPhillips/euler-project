export const answer = 443839;

const targetDigitCount = 5;

function getNumsEqualToDigitPowerSums(power) {
  if (power < 2) {
    throw new Error('power must be greater than 2');
  }

  const digitPowerMap = {};
  const validNums = [];
  for (let i = 0; i <= 9; i += 1) {
    digitPowerMap[i.toString()] = Math.pow(i, power);
  }

  const maxDigitCount = getMaxDigitsForNumsWithPotentialToEqualDigitPowerSums(power);
  const maxDigitSum = Math.pow(10, maxDigitCount) - 1;
  const minDigitSum = 2;

  for (let i = minDigitSum; i <= maxDigitSum; i += 1) {
    const digits = i.toString().split('');
    const digitPowersSum = digits.reduce((soFar, digit) => soFar + digitPowerMap[digit], 0);
    if (digitPowersSum === i) validNums.push(digitPowersSum);
  }

  return validNums;
}

function getMaxDigitsForNumsWithPotentialToEqualDigitPowerSums(power) {
  let digitCount = 1;

  while(true) {
    digitCount += 1;

    const lowestPossibleNumber = Math.pow(10, digitCount - 1);
    const highestPossibleSum = digitCount * Math.pow(9, power);

    if (lowestPossibleNumber > highestPossibleSum) break;
  }

  return digitCount - 1;
}

export function solve() {
  const validNums = getNumsEqualToDigitPowerSums(targetDigitCount);
  return validNums.reduce((soFar, num) => soFar + num, 0);
}
