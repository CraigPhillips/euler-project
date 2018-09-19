import { example } from './triangles';

export const answer = -1;

export function findMaxTrianglePath(triangle) {
  const maxTri = [];

  while (maxTri.length < triangle.length) {
    const nextTriI = maxTri.length;
    const nextMax = [];
    for (let i = 0; i < triangle[nextTriI].length; i += 1) {
      const value = triangle[nextTriI][i];
      if (nextTriI === 0) nextMax.push({ path: `${value} (${i})`, value });
    }
    maxTri.push(nextMax);
  }

  console.log(maxTri);

  return {};
}

export function solve() {
  return findMaxTrianglePath(example);
}
