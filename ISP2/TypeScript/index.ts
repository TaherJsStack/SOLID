
import { Admin } from "./admin";
import { User } from "./user";

let admin = new Admin()
let user = new User()

admin.create('admin create')
admin.comment('admin comment')
admin.share('admin share')
user.comment('user comment')
user.share('user share')