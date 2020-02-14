export const answer = 45228;

const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

function getAllPermutationsOfLengthFrom(length, set) {
  if (length === 0) { return [{ permutation: [], unused: set }] };
  if (set.length < length) throw new Error('set is not big enough');

  const combos = [];
  for(let i=0; i < set.length; i += 1) {
    const smallerCombinations = getAllPermutationsOfLengthFrom(length-1, set.slice(0,i).concat(set.slice(i+1, set.length)));
    smallerCombinations.forEach((combo) => {
      combos.push({
        permutation: [set[i]].concat(combo.permutation),
        unused: combo.unused,
      });
    });
  }
  return combos;
}

export function solve() {
  const pandigitalProducts = [];

  for (let digitsInProduct = 1; digitsInProduct <= digits.length - 2; digitsInProduct += 1) {
    const maxProduct = parseInt(digits.slice(digits.length - digitsInProduct, digits.length).reverse().join(''));
    const minProduct = parseInt(digits.slice(0, digitsInProduct).join(''));

    for (let digitsInOperand1 = 1; digitsInOperand1 <= digits.length - digitsInProduct - 1; digitsInOperand1 += 1) {
      const digitsInOperand2 = digits.length - digitsInProduct - digitsInOperand1;
      const maxOperand1 = parseInt(digits.slice(digits.length - digitsInOperand1, digits.length).reverse().join(''));
      const maxOperand2 = parseInt(digits.slice(digits.length - digitsInOperand2, digits.length).reverse().join(''));
      const minOperand1 = parseInt(digits.slice(0, digitsInOperand1).join(''));
      const minOperand2 = parseInt(digits.slice(0, digitsInOperand2).join(''));

      // skip cases where the number of digits in the products limits it to being too large or too small to ever be
      // equal to the product of operands with the remaining number of digits
      if (maxOperand1 * maxOperand2 < minProduct) continue;
      if (minOperand1 * minOperand2 > maxProduct) continue;

      const allProductsWithUniqueDigits = getAllPermutationsOfLengthFrom(digitsInProduct, digits).reduce((soFar, combo) => {
        soFar[combo.permutation.join('')] = combo;
        delete combo.permutation;
        return soFar;
      }, {});
      for (let product = minOperand1 * minOperand2; product <= maxOperand1 * maxOperand2; product += 1) { 
        if (!allProductsWithUniqueDigits[product]) continue;

        const possiblesForOperand1 = getAllPermutationsOfLengthFrom(digitsInOperand1, allProductsWithUniqueDigits[product].unused);
        possiblesForOperand1.forEach((possibility) => {
          const operand1 = parseInt(possibility.permutation.join(''));
          if (product % operand1 !== 0) return;
          const operand2 = product / operand1;
          if (operand2.toString().length != digitsInOperand2) return;

          for (let i = 0; i < operand2.toString().length; i += 1) {
            const digit = operand2.toString()[i];
            if (possibility.unused.indexOf(digit) === -1) return;
            if (operand2.toString().indexOf(digit, i + 1) != -1) return;
          }

          pandigitalProducts.push({
            operand1,
            operand2,
            product,
          });
        });
      }
    }
  }

  const products = pandigitalProducts.reduce((soFar, { product }) => {
    soFar[product] = true;
    return soFar;
  }, {});

  return Object.keys(products).reduce((soFar, product) => soFar + parseInt(product), 0);
}
