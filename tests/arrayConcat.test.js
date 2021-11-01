const { arrayConcat } = require('../src/array');

test('concat array', () => {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];

  const resultArray = arrayConcat(arr1, arr2);
  expect(resultArray).toStrictEqual([1, 2, 3, 4, 5, 6]);
});
