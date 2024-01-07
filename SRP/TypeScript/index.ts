import { BlogPost } from "./blog-post";
import { DisplayContent } from "./display-content";
import { GetJSON } from './get-JSON';


let blogPost        = new BlogPost('Blog Post Title','Blog Post Content')

let displayContent  = new DisplayContent(blogPost)
let getJSON         = new GetJSON(blogPost)

console.log('blogPost       ---------------->', blogPost)
console.log('displayContent ---------------->', displayContent.displayHTML())
console.log('getJSON        ---------------->', getJSON.returnJSON())
