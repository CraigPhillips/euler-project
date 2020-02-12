export default function getNextLexographicPermutation(start) {
  const chars = start.split('');
  const { length } = chars;

  if (length <= 1) return start;
  if (chars[length - 1] > chars[length - 2]) {
    const last = chars[length - 1];
    chars[length - 1] = chars[length - 2];
    chars[length - 2] = last;
    return chars.join('');
  }

  let firstDecI = -1;
  let i = length - 3;
  while (firstDecI < 0 && i >= 0) {
    if (chars[i] < chars[i + 1]) firstDecI = i;
    i -= 1;
  }
  if (firstDecI === -1) return chars.reverse().join('');

  let swapI = firstDecI + 1;
  let j = swapI + 1;
  while (j < length) {
    if (chars[j] > chars[firstDecI] && chars[j] < chars[swapI]) swapI = j;
    j += 1;
  }

  const firstDecVal = chars[firstDecI];
  chars[firstDecI] = chars[swapI];
  chars[swapI] = firstDecVal;

  const needsSort = chars.splice(firstDecI + 1, length);
  needsSort.sort();
  needsSort.forEach((char) => chars.push(char));

  return chars.join('');
}
