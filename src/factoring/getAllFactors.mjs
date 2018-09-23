import getAllCombinations from '../combinatorics/getAllCombinations';
import getPrimeFactors from './getPrimeFactors';

export default function getAllFactors(num) {
  const factors = { 1: true, [num]: true };
  const primeFactors = getPrimeFactors(num);
  console.log(getAllCombinations(
    Object.entries(primeFactors).reduce((setSoFar, [factor, count]) => {
      const parsedFactor = parseInt(factor, 10);
      for (let i = 0; i < count; i += 1) setSoFar.push(parsedFactor);
      return setSoFar;
    }, []),
  ));

  return Object.keys(factors);
}
