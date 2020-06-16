import generateSentences, { generateParagraphs } from '../lib/generateIpsum';

const nParagraphsDefault = 3;
const nSentencesDefault = 20;

export default function generateIpsumParam(params) {
  var { nSentences, nParagraphs } = params;
  const { startWithChooseLife, endWithChooseIpsum, swear, political } = params;

  var chooseIpsum = undefined;
  if (!nSentences || nParagraphs) {
    nParagraphs = nParagraphs ? parseInt(nParagraphs) : nParagraphsDefault;
    chooseIpsum = generateParagraphs(
      nParagraphs,
      swear,
      political,
      startWithChooseLife,
      endWithChooseIpsum
    );
  } else {
    nSentences = nSentences ? parseInt(nSentences) : nSentencesDefault;
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
