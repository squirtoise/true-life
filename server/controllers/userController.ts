import express, { Request, Response, NextFunction } from "express";

const userController: any = {};

// queries DB for all users, saves returned user array to res.locals
userController.all = (req: Request, res: Response, next: NextFunction) => {};

// queries DB for one user, saves returned user to res.locals
userController.one = (req: Request, res: Response, next: NextFunction) => {};

// adds new user to DB, saves returned user to res.locals
userController.new = (req: Request, res: Response, next: NextFunction) => {};

// updates user in DB, saves returned user to res.locals
userController.put = (req: Request, res: Response, next: NextFunction) => {};

// deletes user from DB
userController.del = (req: Request, res: Response, next: NextFunction) => {};

export default userController;
