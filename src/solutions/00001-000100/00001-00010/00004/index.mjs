export const answer = 906609;

export function isPalindromic(value) {
  if (!value) return false;
  const toTest = value.toString();
  for (let i = 0; i < Math.floor(toTest.length / 2); i += 1) {
    if (toTest[i] !== toTest[toTest.length - 1 - i]) return false;
  }
  return true;
}

export function findLargestPalindromeProductFromOperandsOfLength(length) {
  const maxOperand = (10 ** length) - 1;
  const maxNumber = maxOperand ** 2;

  for (let i = maxNumber; i.toString().length >= length; i -= 1) {
    if (isPalindromic(i)) {
      for (let j = maxOperand; j.toString().length === length; j -= 1) {
        const operand2 = i / j;
        if (Math.floor(operand2) === operand2
            && operand2.toString().length === length) {
          return { operand1: j, operand2, palindrome: i };
        }
      }
    }
  }

  return undefined;
}

export function solve() {
  const threeDigits = 3;
  return findLargestPalindromeProductFromOperandsOfLength(threeDigits)
    .palindrome;
}
