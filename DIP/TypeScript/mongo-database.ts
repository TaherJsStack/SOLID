import { IDatabase } from "./interface/i-database";

export class MongoDatabase implements IDatabase{
    save(data: string): void{
        console.log('MongoDatabase -------> ', data)
    }
}
