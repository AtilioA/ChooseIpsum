import generateSentences, { maxSentences } from '../../utils/generateSentences'

class SentenceController {
  async index(req, res) {
    const startWithChooseLife = !(
      req.query.startWithChooseLife?.toLowerCase() === 'false'
    ); // Only false when set to false; defaults to true

    const endWithChooseLife = !(
      req.query.endWithChooseLife?.toLowerCase() === 'false'
    );

    const sentences = req.query.sentences || 15;
    if (sentences > maxSentences) {
      return res.status(400)
        .json({ error: `Too many sentences. Maximum number is: ${maxSentences}; requested: ${sentences}` });
    }

    const swear = !(
      req.query.swear?.toLowerCase() === 'false'
    );

    const political = !(
      req.query.political?.toLowerCase() === 'false'
    );

    var format = req.query.format ? req.query.format : 'json';
    switch (format) {
      case 'txt':
        format = 'txt';
        break;
      case 'html':
        format = 'html';
        break;
      default:
        format = 'json';
        break;
    }

    var chooseIpsum = generateSentences(sentences, swear, political);

    if (startWithChooseLife) {
      chooseIpsum = "Choose your life. " + chooseIpsum
    }
    if (endWithChooseLife) {
      chooseIpsum += " Choose Lorem. Choose Ipsum.";
    }

    return res.json({
      startWithChooseLife, // default: true
      sentences, // default: 15
      swear, // default: true
      political, // default: true
      endWithChooseLife, // default: true
      format, // default: json
      chooseIpsum
    });
  }
}

export default new SentenceController();
