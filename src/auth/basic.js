import koaBasic from 'koa-basic-auth';

import config from '../config';

export default koaBasic({
  name: config.auth.basic.username,
  pass: config.auth.basic.password,
});
