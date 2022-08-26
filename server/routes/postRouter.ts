import express, { Request, Response, NextFunction } from "express";

import postController from "../controllers/postController";

const router = express.Router();

// returns array of all posts
router.get(
  "/",
  postController.all,
  (req: Request, res: Response, next: NextFunction) => {
    return res.json(res.locals.posts);
  }
);

// returns array of all a user's posts
router.get(
  "/user/:id",
  postController.user,
  (req: Request, res: Response, next: NextFunction) => {
    return res.json(res.locals.posts);
  }
);

// TEST THIS
// returns array of all user's friends' posts
router.get(
  "/friends/:id",
  postController.friends,
  (req: Request, res: Response, next: NextFunction) => {
    return res.json(res.locals.posts);
  }
);

// returns a post
// req.params.id : id of row in post table to return
router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  return res.json(res.locals.post);
});

// returns array of all a post's comments
router.get(
  "/comment/:id",
  (req: Request, res: Response, next: NextFunction) => {
    return res.json(res.locals.comments);
  }
);

// creates a post and returns new post
// (id specified is user creating post)
router.post("/:id", (req: Request, res: Response, next: NextFunction) => {
  return res.json(res.locals.post);
});

// creates a comment and returns new comment
// (id specified is post to be commented on)
router.post(
  "/comment/:id",
  (req: Request, res: Response, next: NextFunction) => {
    return res.json(res.locals.comment);
  }
);

// updates a post and returns updated post
// req.params.id : post ID
router.put("/:id", (req: Request, res: Response, next: NextFunction) => {
  return res.json(res.locals.post);
});

// updates a comment on a post
// (id specified is of comment to be updated)
router.put(
  "/comment/:id",
  (req: Request, res: Response, next: NextFunction) => {
    return res.json(res.locals.comment);
  }
);

// deletes a post
// req.params.id : post ID
router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
  return res.send("Post deleted");
});

// deletes a comment
// req.params.id : comment ID
router.delete(
  "/comment/:id",
  (req: Request, res: Response, next: NextFunction) => {
    return res.send("Comment deleted");
  }
);

export default router;
