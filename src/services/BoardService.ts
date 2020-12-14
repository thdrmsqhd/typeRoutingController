import {Service} from "typedi"
import {BoardRepository} from "../repositorys/BoardRepository"

@Service()
export class BoardService{

    constructor(private repository:BoardRepository) {
    }

    boardList(){
        console.log("it service BoardList")
        return this.repository.boardList()
    }
}