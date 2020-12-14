"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var routing_controllers_1 = require("routing-controllers");
var BoardController_1 = require("./controllers/BoardController");
var app = routing_controllers_1.createExpressServer({
    controllers: [BoardController_1.BoardController],
});
app.listen(3000);
console.log("server is running on http://localhost:3000");
//# sourceMappingURL=app.js.map