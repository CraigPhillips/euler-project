import getAllPermutations from '../combinatorics/getAllPermutations';
import getPrimeFactors from './getPrimeFactors';

export default function getAllFactors(num) {
  const factors = {};
  const primeFactors = getPrimeFactors(num);
  const allPrimeFactorCombos = getAllPermutations(
    Object.entries(primeFactors).reduce((setSoFar, [factor, count]) => {
      const parsedFactor = parseInt(factor, 10);
      for (let i = 0; i < count; i += 1) setSoFar.push(parsedFactor);
      return setSoFar;
    }, []),
  );
  allPrimeFactorCombos.forEach((combo) => {
    const product = combo.reduce((soFar, n) => n * soFar, 1);
    factors[product] = true;
  });

  return Object.keys(factors).map(f => parseInt(f, 10));
}
