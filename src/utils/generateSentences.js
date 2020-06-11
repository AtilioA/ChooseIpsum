import sentences from '../lib/sentences.js';
import getSample from './getSample';

import {
  vanillaSentences,
  swearSentences,
  politicalSentences,
} from '../lib/sentences';

export const maxSentences =
  vanillaSentences.length + swearSentences.length + politicalSentences.length;

// Generate lorem ipsum string from n randomly chosen sentences
export default function generateIpsum(
  nSentences,
  swear = true,
  political = true
) {
  sentences = vanillaSentences;
  if (swear) {
    console.log('concat swear');
    sentences = sentences.concat(swearSentences);
  }
  if (political) {
    console.log('concat political');
    sentences = sentences.concat(politicalSentences);
  }

  var randomSentences = getSample(sentences, nSentences);

  var sentence = '';
  for (var i = 0; i < nSentences; i++) {
    sentence += randomSentences[i];
  }

  return sentence.slice(0, -1); // Remove whitespace after full stop
}
