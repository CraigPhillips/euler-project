function getAllPermutationsOfLengthFrom(
  set,
  length,
  startI = 0,
) {
  if (length === 0) return [[]];
  const permutations = [];

  for (let i = startI; i < set.length - (length - 1); i += 1) {
    const subSets = getAllPermutationsOfLengthFrom(set, length - 1, i + 1);
    for (let j = 0; j < subSets.length; j += 1) {
      const thisSubSet = subSets[j];
      permutations.push([set[i]].concat(thisSubSet));
    }
  }
  return permutations;
}

export default function getAllPermutations(set) {
  let permutations = [];
  for (let i = 0; i <= set.length; i += 1) {
    permutations = permutations.concat(getAllPermutationsOfLengthFrom(set, i));
  }
  return permutations;
}
