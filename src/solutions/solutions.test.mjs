import solutions from '.';

Object.keys(solutions).forEach((problemName) => {
  test(problemName, () => {
    const solution = solutions[problemName];

    expect(solution.answer).not.toBeUndefined();
    expect(solution.solve()).toEqual(solution.answer);
  });
});
