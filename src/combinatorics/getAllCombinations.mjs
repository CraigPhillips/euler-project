function getAllCombinationsOfLengthFrom(
  set,
  length,
  startI = 0,
) {
  if (length === 0) return [[]];
  const combinations = [];

  for (let i = startI; i < set.length - (length - 1); i += 1) {
    const subSets = getAllCombinationsOfLengthFrom(set, length - 1, i + 1);
    for (let j = 0; j < subSets.length; j += 1) {
      const thisSubSet = subSets[j];
      combinations.push([set[i]].concat(thisSubSet));
    }
  }
  return combinations;
}

export default function getAllCombinations(set) {
  let combinations = [];
  for (let i = 0; i <= set.length; i += 1) {
    combinations = combinations.concat(getAllCombinationsOfLengthFrom(set, i));
  }
  return combinations;
}
