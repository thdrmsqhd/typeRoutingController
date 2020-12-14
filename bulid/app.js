"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routing_controllers_1 = require("routing-controllers");
var app = routing_controllers_1.createExpressServer({
    controllers: [],
});
app.listen(3000);
console.log("server is running on http://localhost:3000");
//# sourceMappingURL=app.js.map