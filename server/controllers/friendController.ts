import express, { Request, Response, NextFunction } from "express";

const friendController: any = {};

// queries DB for all user's friends, saves returned user array to res.locals
friendController.all = (req: Request, res: Response, next: NextFunction) => {};

// when a user accepts a friend request:
// first query: updates row in DB, setting request to false (friend_id is the user accepting the req)
// second query: adds row in DB, with request set to false (user_id is the user accepting the req)
friendController.new = (req: Request, res: Response, next: NextFunction) => {};

// adds a friend request to DB, saves returned request to res.locals
friendController.send = (req: Request, res: Response, next: NextFunction) => {};

// deletes a friend request from DB (denied friend requests)
friendController.deny = (req: Request, res: Response, next: NextFunction) => {};

// deletes two users from each others' friend list
friendController.del = (req: Request, res: Response, next: NextFunction) => {};

export default friendController;
