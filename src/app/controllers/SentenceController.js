import generateSentences, { generateParagraphs, maxSentences, maxParagraphs } from '../../utils/generateIpsum'

class SentenceController {
  async index(req, res) {
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

    var sentences = req.query.sentences;
    var paragraphs = req.query.paragraphs;
    if (!sentences || paragraphs) {
      paragraphs = paragraphs ? parseInt(paragraphs) : 5;
      if (paragraphs > maxParagraphs) {
        return res.status(400)
          .json({ error: `Too many paragraphs. Maximum number is ${maxParagraphs}; requested: ${paragraphs}` });
      }
      var chooseIpsum = generateParagraphs(paragraphs, swear, political, startWithChooseLife, endWithChooseLife);
    } else {
      sentences = sentences ? parseInt(sentences) : 15;
      if (sentences > maxSentences) {
        return res.status(400)
          .json({ error: `Too many sentences. Maximum number is ${maxSentences}; requested: ${sentences}` });
      }
      var chooseIpsum = generateSentences(sentences, swear, political, startWithChooseLife, endWithChooseLife);
    }

    var format = req.query.format ? req.query.format : 'json';
    switch (format) {
      case 'txt':
        format = 'txt';
        res.send(chooseIpsum)
        break;

      case 'html':
        format = 'html';
        if (Array.isArray(chooseIpsum)) {
          res.send(chooseIpsum.join('<br/><br/>'))
        } else {
          res.send(chooseIpsum);
        }
        break;

      default:
        format = 'json';
        return res.json({
          startWithChooseLife, // default: true
          sentences, // default: 15
          paragraphs, // default: 5; has preference over 'sentences' option
          swear, // default: true
          political, // default: true
          endWithChooseLife, // default: true
          format, // default: json
          chooseIpsum
        });
        break;
    }
  }
}

export default new SentenceController();
