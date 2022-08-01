const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const appRoutes = require("./routes");

const router = new Router();

app.use(appRoutes.routes());

app.listen(3000);
