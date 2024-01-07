import { BlogPost } from "./blog-post";

export class DisplayContent {
    
    constructor(
        public blogPost: BlogPost
    ){}

    displayHTML(){
        return `
            <h1> ${this.blogPost.title} </h1> 
            <p> ${this.blogPost.contect} </p>
        `
    }
}