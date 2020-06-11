import sentences from '../lib/sentences.js';
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
  sentences = vanillaSentences;
  if (swear) {
    sentences = sentences.concat(swearSentences);
  }
  if (political) {
    sentences = sentences.concat(politicalSentences);
  }

  var randomParagraphs = [];
  var nSentences = 5;
  for (let i = 0; i < nParagraphs; i++) {
    nSentences = getRandomInt(5, 20);
    var randomSentences = getSample(sentences, nSentences);
    randomParagraphs.push(randomSentences);
  }

  for (let i = 0; i < randomParagraphs.length; i++) {
    randomParagraphs[i] = randomParagraphs[i].join('');

    if (startWithChooseLife) {
      randomParagraphs[i] = 'Choose your life. ' + randomParagraphs[i];
    }
    if (endWithChooseLife) {
      randomParagraphs[i] = randomParagraphs[i].concat(
        'Choose Lorem. Choose Ipsum.'
      );
    }
  }

  return randomParagraphs; // Remove whitespace after full stop
}

// Generate lorem ipsum string from n randomly chosen sentences
export default function generateSentences(
  nSentences,
  swear = true,
  political = true,
  startWithChooseLife = true,
  endWithChooseLife = true
) {
  sentences = vanillaSentences;
  if (swear) {
    sentences = sentences.concat(swearSentences);
  }
  if (political) {
    sentences = sentences.concat(politicalSentences);
  }

  var randomSentences = getSample(sentences, nSentences);

  var sentence = '';
  for (var i = 0; i < nSentences; i++) {
    sentence += randomSentences[i];
  }

  if (startWithChooseLife) {
    sentence = 'Choose your life. ' + sentence;
  }
  if (endWithChooseLife) {
    sentence += ' Choose Lorem. Choose Ipsum.';
  }

  return sentence;
}
