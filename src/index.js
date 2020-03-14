import Koa from 'koa';
import bodyParser from 'koa-body-parser';
import mongoose from 'mongoose';

import { initFirebase } from './services/firebase';
import apiRouter from './routes/api';
import publicRouter from './routes/public';
import config from './config';

const app = new Koa();

app.use(bodyParser());

app.use(apiRouter.routes()).use(apiRouter.allowedMethods());
app.use(publicRouter.routes()).use(publicRouter.allowedMethods());

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  initFirebase();

  await mongoose.connect(`mongodb://${config.mongo.host}:${config.mongo.port}/notify`, {
    useNewUrlParser: true
  });

  console.log(`Listening on port: ${port}`);
});
