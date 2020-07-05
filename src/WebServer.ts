import app from "./app";
import { appName, port } from "./config";

export default app.listen(port, () =>
    console.log(`${appName} server run as http://127.0.0.1:${port}`)
);

process.on("unhandledRejection", (reason: string | Error) =>
    console.error(reason)
);
