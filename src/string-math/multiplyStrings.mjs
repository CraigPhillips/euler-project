import addStrings from './addStrings';

export default function multiplyStrings(a, b) {
  const products = [];

  for (let bI = b.length - 1; bI >= 0; bI -= 1) {
    const nextBDigit = parseInt(b[bI], 10);
    let carry = 0;
    let nextProduct = '';

    for (let aI = a.length - 1; aI >= 0; aI -= 1) {
      const result = nextBDigit * parseInt(a[aI], 10) + carry;
      if (result >= 10) carry = Math.floor(result / 10);
      else carry = 0;
      nextProduct = `${(result % 10).toString()}${nextProduct}`;
    }

    if (carry) nextProduct = `${carry.toString()}${nextProduct}`;
    for (let i = 0; i < b.length - bI - 1; i += 1) nextProduct += '0';

    products.push(nextProduct);
  }

  return products.reduce((soFar, next) => addStrings(soFar, next), '0');
}
