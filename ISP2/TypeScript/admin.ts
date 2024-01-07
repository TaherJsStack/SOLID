
import { CreatePost } from "./interfaces/create-post";
import { CommentPost } from "./interfaces/comment-post";
import { SharePost } from './interfaces/share-post';

export class Admin implements CreatePost, CommentPost, SharePost {
    create(post: string): void {
        console.log('Admin create post ->', post)
    }
    comment(comment: string): void {
        console.log('Admin comment post ->', comment)
    }
    share(share: string): void {
        console.log('Admin share post ->', share)
    }

}