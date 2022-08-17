const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const BodyParser = require("koa-bodyparser");
const auth = require("koa-basic-auth");
const cors = require("@koa/cors");
const appRoutes = require("./routes");
const serve = require("koa-static");

const router = new Router();

app.use(serve(__dirname + '/build'));

router.get('/', (ctx) => {
    ctx.body = serve(__dirname + '/build/index.html')
})

app.use(cors());
app.use(BodyParser());
app.use(appRoutes.routes());

app.listen(3001);
