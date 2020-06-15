import {
  maxSentences, maxParagraphs
} from '../lib/generateIpsum';

export default function parseParams(req) {
  const startWithChooseLife = !(
    req.query.startWithChooseLife?.toLowerCase() === 'false'
  ); // Only false when set to false; defaults to true


  const endWithChooseIpsum = !(
    req.query.endWithChooseIpsum?.toLowerCase() === 'false'
  );

  const swear = !(
    req.query.swear?.toLowerCase() === 'false'
  );

  const political = !(
    req.query.political?.toLowerCase() === 'false'
  );

  var { nSentences, nParagraphs } = req.query;
  var format = req.query.format ? req.query.format : 'json';

  if (nParagraphs > maxParagraphs) {
    throw RangeError(`Too many paragraphs. Maximum number is ${maxParagraphs}; requested: ${nParagraphs}`);
  }

  if (nSentences > maxSentences && !nParagraphs) {
    throw RangeError(`Too many sentences. Maximum number is ${maxSentences}; requested: ${nSentences}`);
  }

  return {
    startWithChooseLife,
    nSentences,
    nParagraphs,
    swear,
    political,
    format,
    endWithChooseIpsum
  }
}
