import "reflect-metadata";
import {Controller, Get, Render} from "routing-controllers";

@Controller()
export class BoardController{
    @Get("/")
    @Render("boardList")
    boardList(){
        console.log("boardList");
    }
}