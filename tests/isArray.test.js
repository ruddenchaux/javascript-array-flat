const { isArray } = require('../src/array');

test('is array', () => {
  const arr = [1, 2, 3];

  const isArrayResult = isArray(arr);
  expect(isArrayResult).toBeTruthy();
});

test('is not array', () => {
  const number = 1;

  const isArrayResult = isArray(number);
  expect(isArrayResult).toBeFalsy();
});
