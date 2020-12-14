import "reflect-metadata";
import {Controller, Get, Render} from "routing-controllers";
import {} from "typedi"
import {BoardService} from "../services/BoardService";

@Controller()
export class BoardController{

    constructor(private service:BoardService) {
    }

    @Get("/")
    @Render("boardList")
    boardList(){
        console.log("boardList");
        console.log(this.service.boardList())
    }
}