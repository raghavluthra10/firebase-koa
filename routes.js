const Router = require("koa-router");
const router = new Router();

router.get("/guest", async (ctx) => {
  ctx.body = "guest page";
});

// router.post('/login')

// router.post('signup')

router.get("/home", async (ctx) => {
  ctx.body = "you're now loggin in!!!";
});

module.exports = router;
