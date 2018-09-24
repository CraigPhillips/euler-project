export const answer = 31875000;

export function findPythagoreanTriplesFor(num) {
  const triples = [];
  const c = num;
  const cSquare = num ** 2;

  for (let b = c - 1; b > 1; b -= 1) {
    const bSquare = b ** 2;
    for (let a = b - 1; a > 0; a -= 1) {
      const aSquare = a ** 2;
      if (aSquare + bSquare === cSquare) triples.push({ a, b, c });
    }
  }

  return triples;
}

// this is pretty inefficient and could be sped up through the use of something
// called primitive Pythagorean triplets which I didn't want to take the time
// to get into
export function findPythagoreanTripletWithSum(sum) {
  for (let c = Math.floor(sum / 2); c >= 5; c -= 1) {
    const triplets = findPythagoreanTriplesFor(c);
    for (let i = 0; i < triplets.length; i += 1) {
      const triplet = triplets[i];
      if (triplet.a + triplet.b + triplet.c === sum) return triplet;
    }
  }

  return undefined;
}

export function solve() {
  const oneThousand = 1000;
  const triplet = findPythagoreanTripletWithSum(oneThousand);
  return triplet ? triplet.a * triplet.b * triplet.c : undefined;
}
