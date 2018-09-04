export function getMultiplesUnderCap(values, cap) {
  const multiples = {};

  values.forEach((value) => {
    let nextMultiple = value;
    while (nextMultiple < cap) {
      if (!multiples[nextMultiple]) multiples[nextMultiple] = nextMultiple;
      nextMultiple += value;
    }
  });

  return multiples;
}

export function sumMultiplesUnderCap(values, cap) {
  const multiples = getMultiplesUnderCap(values, cap);
  return Object
    .values(multiples)
    .reduce((soFar, nextVal) => soFar + nextVal, 0);
}

export default function solve() {
  console.log(sumMultiplesUnderCap([3, 5], 1000));
}
