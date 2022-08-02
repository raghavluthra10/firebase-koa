const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const BodyParser = require("koa-bodyparser");
const appRoutes = require("./routes");

const router = new Router();

app.use(BodyParser());
app.use(appRoutes.routes());

app.listen(3000);
