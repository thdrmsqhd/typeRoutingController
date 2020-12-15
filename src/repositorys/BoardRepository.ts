import {Service} from "typedi";
import {Board} from "../models/Board";


@Service()
export class BoardRepository{


    boardList(){
        console.log("boardList" + Board.findAll());
        return "it Repository BoardList"
    }
}