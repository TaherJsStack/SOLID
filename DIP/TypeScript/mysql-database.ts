import { Idatabase } from "./interface/idatabase";

export class MySqlDatabase implements Idatabase {
    save(data: string): void {
        console.log('MySqlDatabase -------> ', data)
    }
}