import sentences from '../lib/sentences.js';
import getSample from './getSample';

// Generate lorem ipsum string from n randomly chosen sentences
export default function generateIpsum(nSentences) {
  var randomSentences = getSample(sentences, nSentences);

  var sentence = '';
  for (var i = 0; i < nSentences; i++) {
    sentence += randomSentences[i];
  }

  return sentence.slice(0, -1); // Remove whitespace after full stop
}
