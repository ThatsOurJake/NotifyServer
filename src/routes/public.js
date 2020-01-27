import KoaRouter from 'koa-router';

const router = new KoaRouter();

router.get('/ping', ctx => ctx.body = { success: true });

export default router;