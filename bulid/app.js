"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var routing_controllers_1 = require("routing-controllers");
var BoardController_1 = require("./controllers/BoardController");
var typedi_1 = require("typedi");
var app = routing_controllers_1.createExpressServer({
    controllers: [BoardController_1.BoardController],
});
routing_controllers_1.useContainer(typedi_1.Container);
app.set("view engine", "hbs");
app.listen(3000);
console.log("server is running on http://localhost:3000");
//# sourceMappingURL=app.js.map