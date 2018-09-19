import { problem } from './triangles';

export const answer = 1074;

export function findAMaxTrianglePath(triangle) {
  const maxTri = [];

  while (maxTri.length < triangle.length) {
    const nextTriI = maxTri.length;
    const nextMax = [];
    for (let i = 0; i < triangle[nextTriI].length; i += 1) {
      const value = triangle[nextTriI][i];
      if (nextTriI === 0) nextMax.push({ path: `${value} (${i})`, value });
      else {
        const prev = maxTri[nextTriI - 1];
        const useLeft = prev[i - 1]
          && (!prev[i] || prev[i - 1].value > prev[i].value);
        const nodeToUse = useLeft ? prev[i - 1] : prev[i];
        nextMax.push({
          path: `${nodeToUse.path} -> ${value} (${i})`,
          value: value + nodeToUse.value,
        });
      }
    }
    maxTri.push(nextMax);
  }

  let result = { value: 0 };
  const lastMaxRow = maxTri[maxTri.length - 1];
  for (let i = 0; i < lastMaxRow.length; i += 1) {
    if (lastMaxRow[i].value > result.value) result = lastMaxRow[i];
  }

  return result;
}

export function solve() {
  return findAMaxTrianglePath(problem).value;
}
