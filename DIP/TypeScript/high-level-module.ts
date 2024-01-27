import { IDatabase } from "./interface/i-database";

export class HighLevelModule {
    constructor(private database: IDatabase) { }
 
    execute(data: string){
        this.database.save(data)
    }
}