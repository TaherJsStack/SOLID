import { CommentPost } from "./interfaces/comment-post";
import { SharePost } from './interfaces/share-post';
 
export class User implements CommentPost, SharePost {
    share(share: string): void {
        console.log('User share post ->', share)
    }
    comment(comment: string): void {
        console.log('User comment post ->', comment)
    }
}