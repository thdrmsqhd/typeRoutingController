import "reflect-metadata";
import {createExpressServer, useContainer} from "routing-controllers";
import {BoardController} from "./controllers/BoardController"
import { Container } from "typedi"

const app = createExpressServer({
    controllers:[BoardController],
})

useContainer(Container);

app.set("view engine", "hbs");

app.listen(3000);


console.log("server is running on http://localhost:3000");