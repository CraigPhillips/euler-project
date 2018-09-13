export const answer = 76576500;

export function getAllFactors(n) {
  const factors = {};

  for (let i = 1; i <= Math.ceil(Math.sqrt(n)); i += 1) {
    if (n % i === 0) {
      factors[i] = true;
      factors[n / i] = true;
    }
  }

  return Object.keys(factors);
}

export function getFirstTriangularNumberWithFactorCountOver(n) {
  let nextTriangular = 0;
  let triangularCount = 0;
  let factors = [];

  while (factors.length <= n) {
    triangularCount += 1;
    nextTriangular += triangularCount;
    factors = getAllFactors(nextTriangular);
  }

  return { factors, number: nextTriangular, triangularCount };
}

export function solve() {
  const fiveHundredFactors = 500;
  return getFirstTriangularNumberWithFactorCountOver(fiveHundredFactors)
    .number;
}
