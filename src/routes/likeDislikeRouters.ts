// import { LikeDislikeBusiness } from "../business";
// import { LikeDislikeController } from "../controller/like-dislike-controller";
// import { CommentDatabase } from "../database/comment-database";
// import { LikeDislikeCommentDatabase } from "../database/like-dislike-comment-database";
// import { LikeDislikePostDatabase } from "../database/like-dislike-post-database";
// import { PostDatabase } from "../database/post-database";
// import { UserDatabase } from "../database/project-database";
// import { IdGenerator, TokenManager } from "../services";
// import express from 'express'

// export const likeDislikeRouter = express.Router();

// //Injenção de dependecias
// const likeDislikeBusiness = new LikeDislikeBusiness(
//     new IdGenerator(),
//     new TokenManager(),
//     new LikeDislikePostDatabase(),
//     new PostDatabase(),
//     new UserDatabase(),
//     new CommentDatabase(),
//     new LikeDislikeCommentDatabase()
// )
// const likeDislikeController = new LikeDislikeController(
//     likeDislikeBusiness
// );

// //POSTS
// likeDislikeRouter.post('/like/posts', likeDislikeController.CreateLikePost)
// likeDislikeRouter.post('/dislike/posts', likeDislikeController.CreateDislikePost)
// likeDislikeRouter.delete('/like/posts', likeDislikeController.RemoveLikePost)
// likeDislikeRouter.delete('/dislike/posts', likeDislikeController.RemoveDislikePost)
// //COMMENTS
// likeDislikeRouter.post('/like/comments', likeDislikeController.CreateLikeComment)
// likeDislikeRouter.post('/dislike/comments', likeDislikeController.CreateDislikeComment)
// likeDislikeRouter.delete('/like/comments', likeDislikeController.RemoveLikeComment)
// likeDislikeRouter.delete('/dislike/comments', likeDislikeController.RemoveDislikeComment)