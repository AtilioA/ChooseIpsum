import sentences from './sentences.js';

// Get number of random elements from array without repetition
function getSample(inputArray, sampleSize) {
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

// Generate lorem ipsum string from n randomly chosen sentences
export function generateIpsum(nSentences) {
  var randomSentences = getSample(sentences, nSentences);

  var sentence = '';
  for (var i = 0; i < nSentences; i++) {
    sentence += randomSentences[i];
  }

  return sentence.slice(0, -1); // Remove whitespace after full stop
}

console.log(generateIpsum(5));
