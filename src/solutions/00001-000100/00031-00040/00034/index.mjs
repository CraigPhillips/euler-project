export const answer = 40730;

const digits = [0,1,2,3,4,5,6,7,8,9]
const fact = (num) => num < 2 ? 1 : num * fact(num - 1);
const digitFactorials = digits.map((digit) => fact(digit));
const getDigit = (number, n) => Math.floor((number / Math.pow(10, n - 1)) % 10);

export function solve() {
  const solutions = [];

  let digitCount = 2;
  while(digitFactorials[digits.length-1] * digitCount >= Math.pow(10, digitCount - 1)) {
    let minToCheck = Math.pow(10, digitCount - 1);
    let maxToCheck = Math.min(Math.pow(10, digitCount) - 1, digitCount * digitFactorials[digits.length - 1]);

    for (let candidate = minToCheck; candidate <= maxToCheck; candidate += 1) {
      let sum = 0;
      for (let digitI = 1; digitI <= digitCount; digitI += 1) {
        sum += digitFactorials[getDigit(candidate, digitI)];
      }
      if (sum === candidate) solutions.push(candidate);
    }

    digitCount += 1;
  }

  return solutions.reduce((soFar, solution) => soFar + solution, 0);
}
