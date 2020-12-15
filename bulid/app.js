"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const BoardController_1 = require("./controllers/BoardController");
const typedi_1 = require("typedi");
const sequelize_typescript_1 = require("sequelize-typescript");
const Board_1 = require("./models/Board");
const app = routing_controllers_1.createExpressServer({
    controllers: [BoardController_1.BoardController],
});
routing_controllers_1.useContainer(typedi_1.Container);
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    database: 'post',
    username: 'root',
    password: '0515',
    models: [Board_1.Board]
});
sequelize.sync();
app.set("view engine", "hbs");
app.listen(3000);
console.log("server is running on http://localhost:3000");
//# sourceMappingURL=app.js.map