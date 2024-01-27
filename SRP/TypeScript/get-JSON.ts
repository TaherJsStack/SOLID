import { BlogPost } from "./blog-post";

export class GetJSON {
    
    constructor(
        public blogPost: BlogPost
    ){}

    returnJSON(){
        return {
            title:   this.blogPost.title, 
            content: this.blogPost.content
        }
    }
}