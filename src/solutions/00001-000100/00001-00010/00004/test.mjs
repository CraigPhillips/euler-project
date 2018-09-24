import { answer, solve } from '.';

test('solution', () => {
  expect(answer).not.toBeUndefined();
  expect(solve()).toEqual(answer);
});
