export const answer = 25164150;

export function getSumSquareDifference(nums) {
  const sumOfSquares = nums.reduce((soFar, num) => soFar + (num ** 2), 0);
  const squareOfSum = nums.reduce((soFar, num) => soFar + num, 0) ** 2;

  return squareOfSum - sumOfSquares;
}

/**
 * the idea here is:
 *
 * - the square of the sum of the provided numbers can be expanded to be the
 *    combination of ever provided number (twice) plus the square of every
 *    element
 * - taking the difference means that all of the squares will be canceled out
 * - this leaves only every combination (twice) to be added to find the result
 *
 * this seems pretty inefficient since this runs in O(n!) time - the other
 * method runs in O(n) time - but might avoid problems that the other method
 * runs into due to numbers just getting too big
 *
 * some tests bear this out (on Intel Xeon CPU E5-1607 v3 @ 3.10Ghz):
 *
 * number of numbers  brute force time advantage
 * 100                1 ms
 * 1000               4 ms
 * 10000              97 ms
 * 100000             9.49 s
 *
 * Note: the answers diverge on the last test in Node v8.10.0 which indicates
 * that the brute force solution is probably starting to breakdown due to
 * numbers getting too large
 *
 * @param nums the numbers for which the difference should be calculated
 */
export function getSumSquareDifferenceByLooping(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      sum += nums[i] * nums[j] * 2;
    }
  }
  return sum;
}

export function solve() {
  const first100Naturals = [];
  for (let i = 1; i <= 100; i += 1) first100Naturals.push(i);

  return getSumSquareDifference(first100Naturals);
}
