import { Router } from 'express';

import SentenceController from './app/controllers/SentenceController';

const routes = new Router();

routes.get('/api/', SentenceController.index);

export default routes;
