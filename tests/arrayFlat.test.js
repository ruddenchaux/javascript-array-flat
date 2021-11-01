const { arrayFlat } = require('../src/array');

test('flat deep array', () => {
  const arr = [
    1,
    [2, [3, [4, 5]]],
    [
      [6, 7],
      [8, [9, 10]]
    ]
  ];

  const flattedArray = arrayFlat(arr);
  expect(flattedArray).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('no array flat', () => {
  const arr = [1, 2];

  const flattedArray = arrayFlat(arr);
  expect(flattedArray).toStrictEqual(arr);
});
