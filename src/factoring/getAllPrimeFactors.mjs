import getPrimeFactors from './getPrimeFactors';

export default function getAllPrimeFactors(nums) {
  return nums.reduce((soFar, num) => {
    const theseFactors = getPrimeFactors(num);
    Object.entries(soFar).forEach(([factor, count]) => {
      if (!theseFactors[factor] || theseFactors[factor] < count) {
        theseFactors[factor] = count;
      }
    });

    return theseFactors;
  }, {});
}
