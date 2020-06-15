import generateSentences, { generateParagraphs } from '../lib/generateIpsum';

export default function generateIpsumParam(params) {
  var { nSentences, nParagraphs } = params;
  const { startWithChooseLife, endWithChooseIpsum, swear, political } = params;

  var chooseIpsum = undefined;
  if (!nSentences || nParagraphs) {
    nParagraphs = nParagraphs ? parseInt(nParagraphs) : 5;
    chooseIpsum = generateParagraphs(
      nParagraphs,
      swear,
      political,
      startWithChooseLife,
      endWithChooseIpsum
    );
  } else {
    nSentences = nSentences ? parseInt(nSentences) : 15;
    chooseIpsum = generateSentences(
      nSentences,
      swear,
      political,
      startWithChooseLife,
      endWithChooseIpsum
    );
  }

  return chooseIpsum;
}
