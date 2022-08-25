import express, { Request, Response, NextFunction } from "express";

const postController: any = {};

// queries DB for all posts, saves returned post array to res.locals
postController.all = (req: Request, res: Response, next: NextFunction) => {};

// queries DB for a user's post, saves returned post array to res.locals
postController.user = (req: Request, res: Response, next: NextFunction) => {};

// queries DB for a user's friend's post, saves returned post array to res.locals
postController.friend = (req: Request, res: Response, next: NextFunction) => {};

// queries DB for one post, saves returned post to res.locals
postController.one = (req: Request, res: Response, next: NextFunction) => {};

// adds new post to DB, saves returned post to res.locals
postController.new = (req: Request, res: Response, next: NextFunction) => {};

// updates post in DB, saves returned post to res.locals
postController.put = (req: Request, res: Response, next: NextFunction) => {};

// deletes post from DB
postController.del = (req: Request, res: Response, next: NextFunction) => {};

export default postController;
