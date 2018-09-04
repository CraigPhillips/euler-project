// O(values.length * cap)
export function getMultiplesUnderCap(values, cap) {
  const multiples = {};

  // O(values.length)
  values.forEach((value) => {
    let nextMultiple = value;
    // O(cap)
    while (nextMultiple < cap) {
      if (!multiples[nextMultiple]) multiples[nextMultiple] = nextMultiple;
      nextMultiple += value;
    }
  });

  return multiples;
}

// O(values.length * cap) although it seems like values will usually be
// pretty low and in that case, this becomes linear with respect to the
// provided cap
export function sumMultiplesUnderCap(values, cap) {
  // O(values.length * cap)
  const multiples = getMultiplesUnderCap(values, cap);
  return Object
    .values(multiples)
    // O(cap)
    .reduce((soFar, nextVal) => soFar + nextVal, 0);
}

export default function solve() {
  console.log(sumMultiplesUnderCap([3, 5], 1000));
}
