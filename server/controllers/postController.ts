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
  let result: any;

  try {
    result = await db.query(queries.getAllPosts);
  } catch (err) {
    console.log(err);
    return res.status(500).send("DB Error:" + err);
  }

  res.locals.posts = result.rows;
  return next();
};

// queries DB for a user's post, saves returned post array to res.locals
postController.user = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let result: any;

  try {
    result = await db.query(queries.getUserPosts, [req.params.id]);
  } catch (err) {
    console.log(err);
    return res.status(500).send("DB Error:" + err);
  }

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
  let result: any;

  try {
    result = await db.query(queries.getFriendPosts, [req.params.id]);
  } catch (err) {
    console.log(err);
    return res.status(500).send("DB Error:" + err);
  }

  res.locals.posts = result.rows[0];
  return next();
};

// queries DB for one post, saves returned post to res.locals
postController.one = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let result: any;

  try {
    result = await db.query(queries.getPost, [req.params.id]);
  } catch (err) {
    console.log(err);
    return res.status(500).send("DB Error:" + err);
  }

  res.locals.posts = result.rows[0];
  return next();
};

// adds new post to DB, saves returned post to res.locals
postController.new = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { picture, caption } = req.body;

  if (picture && caption) {
    let result: any;
    const params: any[] = [
      req.params.id,
      picture,
      caption,
      new Date().toISOString().slice(0, -5),
    ];

    try {
      result = await db.query(queries.createPost, params);
    } catch (err) {
      console.log(err);
      return res.status(500).send("DB Error:" + err);
    }

    if (result.rows.length > 0) {
      res.locals.post = result.rows[0];
      return next();
    } else return res.status(500).send("DB Error: Creating post failed");
  } else
    return res.status(400).send("Picture and/or caption not included in body");
};

// updates post's caption in DB, saves returned post to res.locals
postController.put = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { caption } = req.body;

  if (caption) {
    let result: any;

    try {
      result = await db.query(queries.updatePost, [req.params.id, caption]);
    } catch (err) {
      console.log(err);
      return res.status(500).send("DB Error:" + err);
    }

    if (result.rows.length > 0) {
      res.locals.post = result.rows[0];
      return next();
    } else return res.status(500).send("DB Error: Updating post failed");
  } else return res.status(400).send("Caption not included in body");
};

// deletes post from DB
postController.del = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await db.query(queries.deletePost, [req.params.id]);
  } catch (err) {
    console.log(err);
    return res.status(500).send("DB Error:" + err);
  }
  return next();
};

export default postController;
