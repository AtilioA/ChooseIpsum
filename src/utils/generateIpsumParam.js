import generateSentences, {
  generateParagraphs,
  maxSentences,
  maxParagraphs,
} from '../lib/generateIpsum';

export default function generateIpsumParam(params) {
  var { sentences, paragraphs } = params;
  const { startWithChooseLife, endWithChooseLife, swear, political } = params;

  var chooseIpsum = undefined;
  if (!sentences || paragraphs) {
    paragraphs = paragraphs ? parseInt(paragraphs) : 5;
    if (paragraphs > maxParagraphs) {
      return res.status(400).json({
        error: `Too many paragraphs. Maximum number is ${maxParagraphs}; requested: ${paragraphs}`,
      });
    }
    chooseIpsum = generateParagraphs(
      paragraphs,
      swear,
      political,
      startWithChooseLife,
      endWithChooseLife
    );
  } else {
    sentences = sentences ? parseInt(sentences) : 15;
    if (sentences > maxSentences) {
      return res.status(400).json({
        error: `Too many sentences. Maximum number is ${maxSentences}; requested: ${sentences}`,
      });
    }
    chooseIpsum = generateSentences(
      sentences,
      swear,
      political,
      startWithChooseLife,
      endWithChooseLife
    );
  }

  return chooseIpsum;
}
