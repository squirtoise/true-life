import express, { Request, Response, NextFunction } from 'express';
import commentController from '../controllers/commentController';

import postController from '../controllers/postController';

const router = express.Router();

// returns array of all posts
router.get('/', postController.all, (req: Request, res: Response, next: NextFunction) => {
    return res.json(res.locals.posts);
});

// returns array of all a user's posts
// req.params.id : ID of user whose posts are requested
router.get('/user/:id', postController.user, (req: Request, res: Response, next: NextFunction) => {
    return res.json(res.locals.posts);
});

// returns array of all user's friends' posts
// req.params.id : ID of user whose friends' posts are requested
router.get('/friends/:id', postController.friends, (req: Request, res: Response, next: NextFunction) => {
    return res.json(res.locals.posts);
});

// returns a post
// req.params.id : ID of post whose comments are requested
router.get('/:id', postController.one, (req: Request, res: Response, next: NextFunction) => {
    return res.json(res.locals.post);
});

// returns array of all a user's comments
// req.params.id : ID of post whose comments are requested
router.get('/comment/user/:id', commentController.user, (req: Request, res: Response, next: NextFunction) => {
    return res.json(res.locals.comments);
});

// returns array of all a post's comments
// req.params.id : ID of post whose comments are requested
router.get('/comment/:id', commentController.all, (req: Request, res: Response, next: NextFunction) => {
    return res.json(res.locals.comments);
});

// creates a post and returns new post
// req.params.id : ID of user creating post
router.post('/:id', postController.new, (req: Request, res: Response, next: NextFunction) => {
    return res.json(res.locals.post);
});

// creates a comment and returns new comment
// req.params.id : ID of post being commented on
router.post('/comment/:id', commentController.new, (req: Request, res: Response, next: NextFunction) => {
    return res.json(res.locals.comment);
});

// updates a post and returns updated post
// req.params.id : ID of post to be updated
router.put('/:id', postController.put, (req: Request, res: Response, next: NextFunction) => {
    return res.json(res.locals.post);
});

// updates a comment on a post
// req.params.id : ID of comment to be updated
router.put('/comment/:id', commentController.put, (req: Request, res: Response, next: NextFunction) => {
    return res.json(res.locals.comment);
});

// deletes a post
// req.params.id : ID of post to be deleted
router.delete('/:id', postController.del, (req: Request, res: Response, next: NextFunction) => {
    return res.send('Post deleted');
});

// deletes a comment
// req.params.id : ID of comment to be deleted
router.delete('/comment/:id', commentController.del, (req: Request, res: Response, next: NextFunction) => {
    return res.send('Comment deleted');
});

export default router;
