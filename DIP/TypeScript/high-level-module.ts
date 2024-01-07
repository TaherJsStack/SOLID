import { Idatabase } from "./interface/idatabase";

export class HighLevelModule {
    constructor(private database: Idatabase) { }
 
    execute(data: string){
        this.database.save(data)
    }
}