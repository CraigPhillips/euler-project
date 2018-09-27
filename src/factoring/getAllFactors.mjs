export default function getAllFactors(num) {
  const factors = [1];
  const reverseFactors = [num];
  const sqrt = Math.sqrt(num);

  for (let i = 2; i <= sqrt; i += 1) {
    if (num % i === 0) {
      factors.push(i);

      if (i !== sqrt) reverseFactors.push(num / i);
    }
  }

  return factors.concat(reverseFactors.reverse());
}
