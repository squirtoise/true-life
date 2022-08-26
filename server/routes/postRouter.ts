import express, { Request, Response, NextFunction } from "express";

import postController from "../controllers/postController";

const router = express.Router();

// returns array of all posts
router.get(
  "/",
  postController.all,
  (req: Request, res: Response, next: NextFunction) => {
    return res.locals.posts.length > 0
      ? res.json(res.locals.posts)
      : res.status(404).send("No posts found in DB");
  }
);

// returns array of all a user's posts
router.get(
  "/user/:id",
  postController.user,
  (req: Request, res: Response, next: NextFunction) => {
    return res.locals.posts.length > 0
      ? res.json(res.locals.posts)
      : res.status(404).send("No user posts found in DB");
  }
);

// TEST THIS
// returns array of all user's friends' posts
router.get(
  "/friends/:id",
  postController.friends,
  (req: Request, res: Response, next: NextFunction) => {
    return res.locals.posts.length > 0
      ? res.json(res.locals.posts)
      : res.status(404).send("No friend posts found in DB");
  }
);

// returns a post
// req.params.id : id of row in post table to return
router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  return res.locals.post > 0
    ? res.json(res.locals.post)
    : res.status(404).send("Post not found in DB");
});

// returns array of all a post's comments
router.get(
  "/comment/:id",
  (req: Request, res: Response, next: NextFunction) => {}
);

// creates a post and returns new post
// (id specified is user creating post)
router.post("/:id", (req: Request, res: Response, next: NextFunction) => {});

// creates a comment and returns new comment
// (id specified is post to be commented on)
router.post(
  "/comment/:id",
  (req: Request, res: Response, next: NextFunction) => {}
);

// updates a post and returns updated post
router.put("/:id", (req: Request, res: Response, next: NextFunction) => {});

// updates a comment on a post
// (id specified is of comment to be updated)
router.put(
  "/comment/:id",
  (req: Request, res: Response, next: NextFunction) => {}
);

// deletes a post
router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {});

// deletes a comment
router.delete(
  "/comment/:id",
  (req: Request, res: Response, next: NextFunction) => {}
);

export default router;
