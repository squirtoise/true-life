import { Request, Response, NextFunction } from "express";
import db from "../scripts/dbModel";
import queries from "../scripts/dbQueries";

const postController: any = {};

// queries DB for all posts, saves returned post array to res.locals
postController.all = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result: any = db.query(queries.getAllPosts);
  res.locals.posts = result.rows;
  return next();
};

// queries DB for a user's post, saves returned post array to res.locals
postController.user = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result: any = db.query(queries.getUserPosts, [req.params.id]);
  res.locals.posts = result.rows[0];
  return next();
};

// TEST THIS
// queries DB for a user's friends' posts, saves returned post array to res.locals
postController.friends = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result: any = db.query(queries.getFriendPosts, [req.params.id]);
  res.locals.posts = result.rows[0];
  return next();
};

// queries DB for one post, saves returned post to res.locals
postController.one = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result: any = db.query(queries.getPost, [req.params.id]);
  res.locals.posts = result.rows[0];
  return next();
};

// adds new post to DB, saves returned post to res.locals
postController.new = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    
};

// updates post in DB, saves returned post to res.locals
postController.put = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

// deletes post from DB
postController.del = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export default postController;
