// class MySqlDatabase {
//     save(data: string): void{}
// }

// class HighLevelModule {
//     constructor(private database: MySqlDatabase) { }
//     execute(data: string){
//         this.database.save(data)
//     }
// }


import { HighLevelModule } from "./high-level-module"
import { MongoDatabase } from "./mongo-database"
import { MySqlDatabase } from "./mysql-database"

let mySqlDb:MySqlDatabase = new MySqlDatabase()
let mongoDb:MongoDatabase = new MongoDatabase()

let hightLevelMySql = new HighLevelModule(mySqlDb)
let hightLevelMongo = new HighLevelModule(mongoDb)

hightLevelMySql.execute('Data executed MySql')
hightLevelMongo.execute('Data executed MongoDb')
