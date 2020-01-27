import Koa from 'koa';
import bodyParser from 'koa-body-parser';
import { initFirebase } from './services/firebase';

import apiRouter from './routes/api';
import publicRouter from './routes/public';

const app = new Koa();

app.use(bodyParser());

app.use(apiRouter.routes()).use(apiRouter.allowedMethods());
app.use(publicRouter.routes()).use(publicRouter.allowedMethods());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  initFirebase();

  console.log(`Listening on port: ${port}`);
});
