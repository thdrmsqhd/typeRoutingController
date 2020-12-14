import "reflect-metadata";
import {createExpressServer} from "routing-controllers";
import {BoardController} from "./controllers/BoardController"


const app = createExpressServer({
    controllers:[BoardController],
})


app.set("view engine", "hbs");

app.listen(3000);


console.log("server is running on http://localhost:3000");