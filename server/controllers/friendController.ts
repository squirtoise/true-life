import express, { Request, Response, NextFunction } from "express";

import db from "../scripts/dbModel";
import queries from "../scripts/dbQueries";

const friendController: any = {};

// queries DB for all user's friends, saves returned user array to res.locals
friendController.all = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const queryResult: any = await db.query(queries.getFriends, [req.params.id]);
  res.locals.friends = queryResult.rows;
  return next();
};

// for testing purposes, returns all rows in friends table
friendController.friendTable = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const queryResult: any = await db.query(queries.getAllFriends);
  res.locals.friends = queryResult.rows;
  return next();
};

friendController.requests = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const queryResult: any = await db.query(queries.getFriendReqs, [
    req.params.id,
  ]);
  res.locals.requests = queryResult.rows;
  return next();
};

// when a user accepts a friend request:
// checks if friend request exists in dB
// first query: updates row in DB, setting request to false (friend_id is the user accepting the req)
// second query: adds row in DB, with request set to false (user_id is the user accepting the req)
friendController.new = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // req.body.friend: person who sent request (user_id in request row)
  // req.params.id: person who receieved (friend_id in request row)
  const requestCheck: any = await db.query(queries.getFriendReq, [
    req.body.friend,
    req.params.id,
  ]);
  // if the request exists in the DB
  if (requestCheck?.rows && requestCheck.rows.length > 0) {
    // update the friend row to set request = false
    // req.params.id is friend_id in dB (person accepting request)
    // req.body.friend is user_id in dB (person who sent request)
    const update: any = await db.query(queries.addFriendByReq, [
      req.body.friend,
      req.params.id,
    ]);

    // if update succeeds
    if (update?.rows?.length > 0) {
      // add another row to make the friendship mutual
      const add: any = await db.query(queries.addFriend, [
        req.params.id,
        req.body.friend,
      ]);
      if (add?.rows && add.rows.length > 0) {
        res.locals.update = update.rows[0];
        res.locals.friend = add.rows[0];
        return next();
      } else
        return res
          .status(500)
          .send("DB error: Adding second friend relational row failed");
    } else
      return res.status(500).send("DB error: Friend request update failed");
  } else return res.status(404).send("Friend request does not exist");
};

// adds a friend request to DB, saves returned request to res.locals
// :id param is user ID of user sending the request
// req.body.friend is ID of user receiving request
friendController.send = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userCheck: any = await db.query(queries.getUser, [req.body.friend]);
  if (userCheck?.rows && userCheck.rows.length > 0) {
    // makes sure that they aren't already friends
    const friendCheck: any = await db.query(queries.getFriend, [
      req.params.id,
      req.body.friend,
    ]);
    // if they are not friends
    if (friendCheck.rows.length < 1) {
      const queryResult: any = await db.query(queries.addFriendReq, [
        req.params.id,
        req.body.friend,
      ]);
      res.locals.request = queryResult.rows[0];
      return next();
    } else return res.status(400).send("Users are already friends");
  } else
    return res
      .status(404)
      .send("Friend ID specified in body does not match any user ID in dB.");
};

// deletes a friend request from DB (denied friend requests)
friendController.deny = (req: Request, res: Response, next: NextFunction) => {};

// deletes two users from each others' friend list
friendController.del = (req: Request, res: Response, next: NextFunction) => {};

export default friendController;
