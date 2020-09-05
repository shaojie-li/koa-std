import "reflect-metadata";
import path from "path";
import Logger from "koa-logger";
import bodyParser from "koa-bodyparser";
import { createKoaServer } from "routing-controllers";

const app = createKoaServer({
    cors: { credentials: true },
    authorizationChecker: ({ context }) => {
        return !!context.currentUser;
    },
    controllers: [path.join(__dirname, "/controllers/**/*{js,.ts}")],
});

app.use(Logger);
app.use(bodyParser());

export default app;
