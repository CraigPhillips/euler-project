export const answer = 983;

export function findUnitRepeatend(divisor) {
  let i = 0;
  let nextNumerator = 1;
  const numerators = {};
  let result = '';

  while (nextNumerator < divisor) nextNumerator *= 10;
  while (numerators[nextNumerator] === undefined && nextNumerator !== 0) {
    numerators[nextNumerator] = i;
    i += 1;

    let nextDigit = 0;
    if (nextNumerator < divisor) nextNumerator *= 10;
    else {
      while ((nextDigit + 1) * divisor <= nextNumerator) nextDigit += 1;
      nextNumerator = (nextNumerator % (nextDigit * divisor)) * 10;
    }

    result += nextDigit;
  }

  return nextNumerator === 0
    ? undefined : result.substr(numerators[nextNumerator]);
}

export function solve() {
  const unitCap = 1000;
  let longest = { length: -1 };

  for (let i = 2; i < unitCap; i += 1) {
    const repeatend = findUnitRepeatend(i);
    if (repeatend) {
      if (repeatend.length > longest.length) {
        longest = {
          length: repeatend.length,
          repeatends: [repeatend],
          units: [i],
        };
      } else if (repeatend.length === longest.length) {
        longest.repeatends.push(repeatend);
        longest.units.push(i);
      }
    }
  }

  return longest.units[0];
}
