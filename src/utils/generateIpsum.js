import getSample from './getSample';
import getRandomInt from './getRandomInt';

import {
  vanillaSentences,
  swearSentences,
  politicalSentences,
} from '../lib/sentences';

export const maxSentences =
  vanillaSentences.length + swearSentences.length + politicalSentences.length;

export const maxParagraphs = 1000;

// Generate lorem ipsum array with n paragraphs made of randomly chosen number of sentences
export function generateParagraphs(
  nParagraphs,
  swear = true,
  political = true,
  startWithChooseLife = true,
  endWithChooseLife = true
) {
  var allSentences = vanillaSentences;
  if (swear) {
    allSentences = allSentences.concat(swearSentences);
  }
  if (political) {
    allSentences = allSentences.concat(politicalSentences);
  }

  var randomParagraphs = [];
  var nSentences = 5;
  for (let i = 0; i < nParagraphs; i++) {
    nSentences = getRandomInt(5, 20);
    var randomSentences = getSample(allSentences, nSentences);
    randomParagraphs.push(randomSentences);
  }

  for (let i = 0; i < randomParagraphs.length; i++) {
    randomParagraphs[i] = randomParagraphs[i].join('');

    if (startWithChooseLife) {
      randomParagraphs[i] = 'Choose life. ' + randomParagraphs[i];
    }
    if (endWithChooseLife) {
      randomParagraphs[i] = randomParagraphs[i].concat(
        'Choose Lorem. Choose Ipsum.'
      );
    }
  }

  return randomParagraphs;
}

// Generate lorem ipsum string from n randomly chosen sentences
export default function generateSentences(
  nSentences,
  swear = true,
  political = true,
  startWithChooseLife = true,
  endWithChooseLife = true
) {
  var allSentences = vanillaSentences;
  if (swear) {
    allSentences = allSentences.concat(swearSentences);
  }
  if (political) {
    allSentences = allSentences.concat(politicalSentences);
  }

  var randomSentences = getSample(allSentences, nSentences);

  var sentences = '';
  for (var i = 0; i < nSentences; i++) {
    sentences += randomSentences[i];
  }

  if (startWithChooseLife) {
    sentences = 'Choose life. ' + sentences;
  }
  if (endWithChooseLife) {
    sentences += ' Choose Lorem. Choose Ipsum.';
  }

  return sentences;
}
