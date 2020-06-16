import parseParams from '../../utils/parseParams';
import generateIpsumParam from '../../utils/generateIpsumParam';

class SentenceController {
  async index(req, res) {
    var parsedParams = undefined;
    try {
      parsedParams = parseParams(req);
    } catch (e) {
      if (e instanceof RangeError) {
        if (req.query.nParagraphs) {
          return res.status(400).json({
            error: `Too many paragraphs. Requested: ${req.query.nParagraphs}`,
          });
        }
        return res.status(400).json({
          error: `Too many sentences. Requested: ${req.query.nSentences}`,
        });
      }
    }
    const {
      startWithChooseLife,
      swear,
      political,
      endWithChooseIpsum,
    } = parsedParams;
    var { nSentences, nParagraphs, format } = parsedParams;

    var chooseIpsum = undefined;
    chooseIpsum = generateIpsumParam(parsedParams);
    switch (format) {
      case 'txt':
        format = 'txt';
        res.send(chooseIpsum);
        break;

      case 'html':
        format = 'html';
        if (Array.isArray(chooseIpsum)) {
          res.send(chooseIpsum.join('<br/><br/>'));
        } else {
          res.send(chooseIpsum);
        }
        break;

      default:
        format = 'json';
        return res.json({
          startWithChooseLife, // default: true
          nSentences, // default: 20
          nParagraphs, // default: 3; has preference over 'nSentences' option
          swear, // default: true
          political, // default: true
          endWithChooseIpsum, // default: true
          format, // default: json
          chooseIpsum,
        });
    }
  }
}

export default new SentenceController();
