/**
 * Return true if input is a array
 * @param {Array} array
 * @returns
 */
function isArray(array) {
  return Object.prototype.toString.call(array) === '[object Array]';
}

/**
 * Create a copy of input array
 * @param {Array} array1
 * @returns the copied array
 */
function arrayCopy(array) {
  const copiedArray = [];

  for (let i = 0; i < array.length; i++) {
    copiedArray[i] = array[i];
  }
  return copiedArray;
}

/**
 * Concate the array parameters
 * @param {Array} array1
 * @param {Array} array2
 * @returns the result of concat
 */
function arrayConcat(array1, array2) {
  const concatedArray = arrayCopy(array1);

  for (let i = array1.length; i < array1.length + array2.length; i++) {
    concatedArray[i] = array2[i - array1.length];
  }
  return concatedArray;
}

/**
 * Flat deeply the array input parameter
 * @param {Array} array
 * @returns the flatted array
 */
function arrayFlat(array) {
  let flattedArray = [];
  let flattedArrayIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (isArray(array[i])) {
      flattedArray = arrayConcat(flattedArray, arrayFlat(array[i]));
      flattedArrayIndex += flattedArray.length - 1;
    } else {
      flattedArray[flattedArrayIndex] = array[i];
      flattedArrayIndex++;
    }
  }
  return flattedArray;
}

module.exports = {
  isArray,
  arrayCopy,
  arrayConcat,
  arrayFlat
};
