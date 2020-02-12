import multiplyStrings from './multiplyStrings';

export default function powerStrings(num, power) {
  let result = '1';
  for (let i = 0; i < power; i += 1) {
    result = multiplyStrings(result, num);
  }
  return result;
}
