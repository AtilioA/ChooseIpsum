const path = require('path');

import { Router } from 'express';

import SentenceController from './app/controllers/SentenceController';

const routes = new Router();

routes.get('/api/', SentenceController.index);

routes.get('/', (req, res) => {
  res.redirect('https://atilioa.github.io/ChooseIpsum/');
});

// WIP
routes.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../web/build/index.html'));
});

export default routes;
