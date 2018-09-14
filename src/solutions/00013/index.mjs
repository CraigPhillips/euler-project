import numbers from './bigNumberList';

export const answer = 5537376230;

export function addStrings(num1, num2) {
  const longerLength = Math.max(num1.length, num2.length);
  const sum = [];
  let carry = 0;
  for (let i = 0; i < longerLength; i += 1) {
    let thisSum = parseInt(num1[num1.length - i - 1] || 0, 10)
      + parseInt(num2[num2.length - i - 1] || 0, 10)
      + carry;
    carry = thisSum >= 10;
    if (thisSum >= 10) thisSum -= 10;
    sum.push(thisSum);
  }
  if (carry) sum.push('1');

  return sum.reverse().join('');
}

export function solve() {
  const first10Digits = 10;
  return parseInt(
    numbers
      .reduce((soFar, num) => addStrings(num, soFar), '0')
      .substring(0, first10Digits),
    10,
  );
}
