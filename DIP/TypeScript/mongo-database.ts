import { Idatabase } from "./interface/idatabase";

export class MongoDatabase implements Idatabase{
    save(data: string): void{
        console.log('MongoDatabase -------> ', data)
    }
}
