import parseParams from '../../utils/parseParams';
import generateIpsumParam from '../../utils/generateIpsumParam';

class SentenceController {
  async index(req, res) {
    const parsedParams = parseParams(req);
    const {
      startWithChooseLife,
      swear,
      political,
      endWithChooseLife,
    } = parsedParams;
    var { sentences, paragraphs, format } = parsedParams;

    var chooseIpsum = undefined;
    try {
      chooseIpsum = generateIpsumParam(parsedParams);
    } catch (e) {
      if (e instanceof RangeError) {
        console.log('pse');
      }
    }

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
          sentences, // default: 15
          paragraphs, // default: 5; has preference over 'sentences' option
          swear, // default: true
          political, // default: true
          endWithChooseLife, // default: true
          format, // default: json
          chooseIpsum,
        });
    }
  }
}

export default new SentenceController();
