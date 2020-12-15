import "reflect-metadata";
import {createExpressServer, useContainer} from "routing-controllers";
import {BoardController} from "./controllers/BoardController";
import { Container } from "typedi";
import {Sequelize} from "sequelize-typescript";
import {Board} from "./models/Board"

const app = createExpressServer({
    controllers:[BoardController],
})

useContainer(Container);

const sequelize = new Sequelize({
    dialect:"mysql",
    database: 'post',
    username: 'root',
    password: '0515',
    models:[Board]
})

sequelize.sync();

app.set("view engine", "hbs");

app.listen(3000);


console.log("server is running on http://localhost:3000");