import express, { Request, Response, NextFunction } from "express";

const commentController: any = {};

// queries DB for all post's comments, saves returned comment array to res.locals
commentController.all = (req: Request, res: Response, next: NextFunction) => {};

// adds new comment to DB, saves returned comment to res.locals
commentController.new = (req: Request, res: Response, next: NextFunction) => {};

// updates comment in DB, saves returned comment to res.locals
commentController.put = (req: Request, res: Response, next: NextFunction) => {};

// deletes comment from DB
commentController.del = (req: Request, res: Response, next: NextFunction) => {};

export default commentController;
