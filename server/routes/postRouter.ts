import express, { Request, Response, NextFunction } from 'express';

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

// TEST THIS
// returns array of all user's friends' posts
// req.params.id : ID of user whose friends' posts are requested
router.get('/friends/:id', postController.friends, (req: Request, res: Response, next: NextFunction) => {
    return res.json(res.locals.posts);
});

// returns a post
// req.params.id : ID of row in post table to return
router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    return res.json(res.locals.post);
});

// returns array of all a post's comments
// req.params.id : ID of post whose comments are requested
router.get('/comment/:id', (req: Request, res: Response, next: NextFunction) => {
    return res.json(res.locals.comments);
});

// creates a post and returns new post
// req.params.id : ID of user creating post
router.post('/:id', (req: Request, res: Response, next: NextFunction) => {
    return res.json(res.locals.post);
});

// creates a comment and returns new comment
// req.params.id : ID of post being commented on
router.post('/comment/:id', (req: Request, res: Response, next: NextFunction) => {
    return res.json(res.locals.comment);
});

// updates a post and returns updated post
// req.params.id : ID of post to be updated
router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
    return res.json(res.locals.post);
});

// updates a comment on a post
// req.params.id : ID of comment to be updated
router.put('/comment/:id', (req: Request, res: Response, next: NextFunction) => {
    return res.json(res.locals.comment);
});

// deletes a post
// req.params.id : ID of post to be deleted
router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
    return res.send('Post deleted');
});

// deletes a comment
// req.params.id : ID of comment to be deleted
router.delete('/comment/:id', (req: Request, res: Response, next: NextFunction) => {
    return res.send('Comment deleted');
});

export default router;
