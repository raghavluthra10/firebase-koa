const Router = require("koa-router");
const router = new Router();

const { homePage, guestPage } = require("./controllers");

router.get("/guest", guestPage);

// router.post('/login',)

// router.post('signup')

router.get("/home", homePage);

module.exports = router;
