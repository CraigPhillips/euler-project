import { getAllPrimeFactors} from '../../../../factoring';

export const answer = 100;

const digitCountMinMax = 2;

export function solve() {
  const min = Math.pow(10, digitCountMinMax - 1);
  const max = Math.pow(10, digitCountMinMax) - 1;

  const naiveCancellations = {};
  for (let denominator = min; denominator <= max; denominator += 1) {
    for (let numerator = min; numerator < denominator; numerator += 1) {
      const value = numerator / denominator;
      const numDigits = numerator.toString().split('');
      const denDigits = denominator.toString().split('');

      for (let numI = 0; numI < numDigits.length; numI += 1) {
        for (let denI = 0; denI < denDigits.length; denI += 1) {
          if (numDigits[numI] === denDigits[denI] && numDigits[numI] !== '0') {
            const newNumerator = parseInt(numDigits.slice(0, numI).concat(numDigits.slice(numI + 1)).join(''));
            const newDenominator = parseInt(denDigits.slice(0, denI).concat(denDigits.slice(denI + 1)).join(''));

            if (newNumerator/newDenominator === value) {
              naiveCancellations[`${numerator}/${denominator}`] = {
                denominator,
                newDenominator,
                newNumerator,
                numerator,
                value,
              };
            }
          }
        }
      }
    }
  }

  const productDen = Object.values(naiveCancellations).reduce((soFar, {denominator}) => soFar * denominator, 1);
  const productNum = Object.values(naiveCancellations).reduce((soFar, {numerator}) => soFar * numerator, 1);

  const factorsDen = getAllPrimeFactors([productDen]);
  const factorsNum = getAllPrimeFactors([productNum]);

  Object.keys(factorsNum).forEach((numFactor) => {
    while(factorsNum[numFactor] > 0 && factorsDen[numFactor] && factorsDen[numFactor] > 0) {
      factorsNum[numFactor] -= 1;
      factorsDen[numFactor] -= 1;
    }
  });

  const simplifiedProductNum = Object.keys(factorsNum).reduce((soFar, factor) => soFar * Math.pow(parseInt(factor), factorsNum[factor]), 1);
  const simplifiedProductDen = Object.keys(factorsDen).reduce((soFar, factor) => soFar * Math.pow(parseInt(factor), factorsDen[factor]), 1);

  return simplifiedProductDen;
}
