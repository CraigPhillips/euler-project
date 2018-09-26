import namesList from './names';

export const answer = 871198282;

const aCharCode = 'a'.charCodeAt(0);
export function getAlphaScore(target, shouldLowerCaseFirst = false) {
  const toCheck = shouldLowerCaseFirst ? target.toLowerCase() : target;
  let score = 0;
  for (let i = 0; i < toCheck.length; i += 1) {
    score += toCheck.charCodeAt(i) - aCharCode + 1;
  }
  return score;
}

export function solve() {
  return namesList
    .split(',')
    .map((name) => {
      const toCheck = name.substring(1, name.length - 1).toLowerCase();
      return { name: toCheck, alphaScore: getAlphaScore(toCheck) };
    })
    // assumes that there are no repeats of names which would make the answer to
    // this problem ambigous in any case
    .sort(({ name: a }, { name: b }) => (a > b ? 1 : -1))
    .reduce((sum, { alphaScore }, i) => (i + 1) * alphaScore + sum, 0);
}
