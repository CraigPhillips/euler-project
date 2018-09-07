export function sumFibsUnderCap(cap, filter = () => true) {
  let sum = 0;
  let lastFib = 1;
  let nextFib = 2;

  if (cap > 1 && filter(1)) sum += 1;
  while (nextFib < cap) {
    if (filter(nextFib)) sum += nextFib;

    const expiringFib = lastFib;
    lastFib = nextFib;
    nextFib = expiringFib + lastFib;
  }

  return sum;
}

export default function solve() {
  const fourMillion = 4000000;
  const isEven = fib => fib % 2 === 0;

  return sumFibsUnderCap(fourMillion, isEven);
}
