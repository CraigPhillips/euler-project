export const answer = 837799;

class LinkedListNode {
  constructor(value, next) {
    Object.assign(this, { value, next });
  }
}

export function stringifyLinkedList(head) {
  let output = Object.keys(head)
    .filter(k => k !== 'next')
    .map(k => `${k}: ${head[k].toString()}`)
    .join(', ');
  output = `[${output}]`;
  if (head.next) output += ` -> ${stringifyLinkedList(head.next)}`;

  return output;
}

const collatzCache = {};
export function getCollatzSequence(num) {
  const cacheEntriesToUpdate = [];
  let collatzCount = 0;
  let endFound = false;
  let lastNode;
  let nextValue = num;

  while (!endFound) {
    if (collatzCache[nextValue]) {
      endFound = true;
      collatzCount += collatzCache[nextValue].length;
      if (lastNode) lastNode.next = collatzCache[nextValue];
    } else {
      collatzCount += 1;
      const newNode = new LinkedListNode(nextValue);
      if (lastNode) lastNode.next = newNode;
      lastNode = newNode;

      cacheEntriesToUpdate.push({ newNode, collatzCount });

      if (nextValue === 1) endFound = true;
      else {
        nextValue = nextValue % 2 === 0 ? nextValue / 2 : 3 * nextValue + 1;
      }
    }
  }

  cacheEntriesToUpdate.forEach((entry) => {
    const node = entry.newNode;
    node.length = collatzCount - entry.collatzCount + 1;
    collatzCache[node.value] = node;
  });

  return collatzCache[num];
}

export function getLongestCollatzSequenceFromNumbersUnder(cap) {
  let maxLength = 0;
  let maxSequences = [];
  for (let i = cap - 1; i > 0; i -= 1) {
    const thisChain = getCollatzSequence(i);
    if (thisChain.length > maxLength) {
      maxLength = thisChain.length;
      maxSequences = [thisChain];
    } else if (thisChain.length === maxLength) maxSequences.push(thisChain);
  }

  return { maxSequences, maxLength };
}

export function solve() {
  const oneMillion = 1000000;
  const result = getLongestCollatzSequenceFromNumbersUnder(oneMillion);
  return result.maxSequences[0].value;
}
