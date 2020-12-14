"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardController = void 0;
require("reflect-metadata");
var routing_controllers_1 = require("routing-controllers");
var BoardService_1 = require("../services/BoardService");
var BoardController = /** @class */ (function () {
    function BoardController(service) {
        this.service = service;
    }
    BoardController.prototype.boardList = function () {
        console.log("boardList");
        console.log(this.service.boardList());
    };
    __decorate([
        routing_controllers_1.Get("/"),
        routing_controllers_1.Render("boardList"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BoardController.prototype, "boardList", null);
    BoardController = __decorate([
        routing_controllers_1.Controller(),
        __metadata("design:paramtypes", [BoardService_1.BoardService])
    ], BoardController);
    return BoardController;
}());
exports.BoardController = BoardController;
//# sourceMappingURL=BoardController.js.map