// Get number of random elements from array without repetition
export default function getSample(inputArray, sampleSize) {
  var result = new Array(sampleSize),
    inputArrayLen = inputArray.length,
    taken = new Array(inputArrayLen);

  if (sampleSize > inputArrayLen) {
    throw new RangeError('getSample: more elements taken than available');
  }

  while (sampleSize--) {
    var x = Math.floor(Math.random() * inputArrayLen);
    result[sampleSize] = inputArray[x in taken ? taken[x] : x];
    taken[x] = --inputArrayLen in taken ? taken[inputArrayLen] : inputArrayLen;
  }

  return result;
}
