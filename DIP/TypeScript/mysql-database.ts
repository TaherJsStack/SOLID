import { IDatabase } from "./interface/i-database";

export class MySqlDatabase implements IDatabase {
    save(data: string): void {
        console.log('MySqlDatabase -------> ', data)
    }
}