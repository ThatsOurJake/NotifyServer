import KoaRouter from 'koa-router';

import { registerToken, sendMessage, unregisterToken } from '../services/firebase';

const hexRegex = /^#(([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})$/;

const router = new KoaRouter({
  prefix: '/api'
});

// Client auth from the mobile
router.post('/register-token', async ctx => {
  const { token } = ctx.request.body;

  if (!token) {
    return ctx.throw(400, 'No token provided');
  }

  await registerToken({ token });

  ctx.status = 200;
});

// Basic Auth and Client Auth
router.post('/send', async ctx => {
  const { title, body, colour } = ctx.request.body;

  if (!title) {
    ctx.body = {
      success: false,
      message: 'Must provide title',
    };

    ctx.status = 400;

    return;
  } else if (!body) {
    ctx.body = {
      success: false,
      message: 'Must provide a body',
    };

    ctx.status = 400;

    return;
  }

  if (colour && !hexRegex.test(colour)) {
    ctx.body = {
      success: false,
      message: 'Colour is not a valid Hex Colour',
    };

    ctx.status = 400;

    return;
  }

  await sendMessage({
    title,
    body,
    colour
  });

  ctx.body = {
    success: true
  };
});

router.post('/unregister-token', async ctx => {
  const { token } = ctx.request.body;

  if (!token) {
    return ctx.throw(400, 'No token provided');
  }

  await unregisterToken({ token });

  ctx.status = 200;
});

export default router;