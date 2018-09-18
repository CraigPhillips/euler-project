import numbers from './bigNumberList';
import { addStrings } from '../../string-math';

export const answer = 5537376230;

export function solve() {
  const first10Digits = 10;
  return parseInt(
    numbers
      .reduce((soFar, num) => addStrings(num, soFar), '0')
      .substring(0, first10Digits),
    10,
  );
}
