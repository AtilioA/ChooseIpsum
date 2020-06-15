import {
  maxSentences, maxParagraphs
} from '../lib/generateIpsum';

export default function parseParams(req) {
  const startWithChooseLife = !(
    req.query.startWithChooseLife?.toLowerCase() === 'false'
  ); // Only false when set to false; defaults to true


  const endWithChooseLife = !(
    req.query.endWithChooseLife?.toLowerCase() === 'false'
  );

  const swear = !(
    req.query.swear?.toLowerCase() === 'false'
  );

  const political = !(
    req.query.political?.toLowerCase() === 'false'
  );

  var { sentences, paragraphs } = req.query;
  var format = req.query.format ? req.query.format : 'json';

  if (paragraphs > maxParagraphs) {
    throw RangeError(`Too many paragraphs. Maximum number is ${maxParagraphs}; requested: ${paragraphs}`);
  }

  if (sentences > maxSentences) {
    throw RangeError(`Too many sentences. Maximum number is ${maxSentences}; requested: ${sentences}`);
  }

  return {
    startWithChooseLife,
    sentences,
    paragraphs,
    swear,
    political,
    format,
    endWithChooseLife
  }
}
