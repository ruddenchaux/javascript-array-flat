const { arrayCopy } = require('../src/array');

test('copy array', () => {
  const arr = [1, 2, 3];

  const copiedArray = arrayCopy(arr);
  expect(copiedArray).toStrictEqual([1, 2, 3]);
  expect(copiedArray).not.toBe(arr);
});
