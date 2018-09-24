export const answer = 21124;

export function getTextForNumberUnder1001(num) {
  if (num < 1) throw new Error('number must be positive');
  if (num > 1000) throw new Error('number be 1000 or less');
  if (num === 1000) return 'one thousand';

  const digits = num.toString().split('');
  const isATeen = digits.length > 1 && digits[digits.length - 2] === '1';
  let result;

  switch (digits[digits.length - 1]) {
    case '0':
      result = isATeen ? 'ten' : '';
      break;
    case '1':
      result = isATeen ? 'eleven' : 'one';
      break;
    case '2':
      result = isATeen ? 'twelve' : 'two';
      break;
    case '3':
      result = isATeen ? 'thirteen' : 'three';
      break;
    case '4':
      result = isATeen ? 'fourteen' : 'four';
      break;
    case '5':
      result = isATeen ? 'fifteen' : 'five';
      break;
    case '6':
      result = isATeen ? 'sixteen' : 'six';
      break;
    case '7':
      result = isATeen ? 'seventeen' : 'seven';
      break;
    case '8':
      result = isATeen ? 'eighteen' : 'eight';
      break;
    case '9':
      result = isATeen ? 'nineteen' : 'nine';
      break;
    default:
      break;
  }

  if (digits.length > 1) {
    if (result && num >= 20 && digits[digits.length - 2] !== '0'
        && digits[digits.length - 2] !== '1') {
      result = `-${result}`;
    }

    switch (digits[digits.length - 2]) {
      case '1':
        break;
      case '2':
        result = `twenty${result}`;
        break;
      case '3':
        result = `thirty${result}`;
        break;
      case '4':
        result = `forty${result}`;
        break;
      case '5':
        result = `fifty${result}`;
        break;
      case '6':
        result = `sixty${result}`;
        break;
      case '7':
        result = `seventy${result}`;
        break;
      case '8':
        result = `eighty${result}`;
        break;
      case '9':
        result = `ninety${result}`;
        break;
      default:
        break;
    }
  }

  if (digits.length > 2) {
    if (digits[digits.length - 1] !== '0'
        || digits[digits.length - 2] !== '0') {
      result = ` hundred and ${result}`;
    } else result = ' hundred';
    switch (digits[0]) {
      case '1':
        result = `one${result}`;
        break;
      case '2':
        result = `two${result}`;
        break;
      case '3':
        result = `three${result}`;
        break;
      case '4':
        result = `four${result}`;
        break;
      case '5':
        result = `five${result}`;
        break;
      case '6':
        result = `six${result}`;
        break;
      case '7':
        result = `seven${result}`;
        break;
      case '8':
        result = `eight${result}`;
        break;
      case '9':
        result = `nine${result}`;
        break;
      default:
        break;
    }
  }

  return result;
}

export function solve() {
  const oneThousand = 1000;

  let letterCount = 0;
  for (let i = 1; i <= oneThousand; i += 1) {
    letterCount += getTextForNumberUnder1001(i)
      .replace(/( |-)/g, '')
      .length;
  }

  return letterCount;
}
