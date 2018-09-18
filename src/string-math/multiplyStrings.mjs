import addStrings from './addStrings';

export default function multiplyStrings(a, b) {
  let product = 0;

  for (let bI = b.length - 1; bI >= 0; bI -= 1) {
    const nextBDigit = parseInt(b[bI], 10);
    let carry = 0;

    for (let aI = a.length - 1; aI >= 0; aI -= 1) {
      const result = nextBDigit * parseInt(a[aI], 10) + carry;
      if (result >= 10) {
        carry = Math.floor(result / 10);
        product = result % 10;
      } else carry = 0;
    }
  }

  return product;
}
