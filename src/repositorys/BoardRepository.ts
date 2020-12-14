import {Service} from "typedi"

@Service()
export class BoardRepository{


    boardList(){
        return "it Repository BoardList"
    }
}