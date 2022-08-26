import express, { Request, Response, NextFunction } from "express";

import userController from "../controllers/userController";
import friendController from "../controllers/friendController";

const router = express.Router();

// returns array of all user objects
router.get(
  "/",
  userController.all,
  (req: Request, res: Response, next: NextFunction) => {
    return res.locals.users
      ? res.json(res.locals.users)
      : res.status(404).send("No users in DB");
  }
);

// for manual testing purposes, returns all rows in user_friends table
router.get(
  "/friend/",
  friendController.friendTable,
  (req: Request, res: Response, next: NextFunction) => {
    return res.locals.friends
      ? res.send(res.locals.friends)
      : res.status(404).send("No rows in user_friends table");
  }
);

// returns one user object
router.get(
  "/:id",
  userController.one,
  (req: Request, res: Response, next: NextFunction) => {
    return res.locals.user
      ? res.json(res.locals.user)
      : res.status(404).send("User not found, check ID validity");
  }
);

// returns array of user's friends (user objects)
router.get(
  "/friend/:id",
  friendController.all,
  (req: Request, res: Response, next: NextFunction) => {
    return res.json(res.locals.friends);
  }
);

// returns array of user's friend requests (user objects)
router.get(
  "/friend/request/:id",
  friendController.all,
  (req: Request, res: Response, next: NextFunction) => {
    return res.json(res.locals.requests);
  }
);

// creates and returns new user
router.post(
  "/",
  userController.new,
  (req: Request, res: Response, next: NextFunction) => {
    return res.json(res.locals.user);
  }
);

// when a user accepts a friend request
// (:id param is user ID accepting the friend request)
router.post(
  "/friend/:id",
  friendController.new,
  (req: Request, res: Response, next: NextFunction) => {
    // returns the updated friendship row, and the new friendship row
    const { updated, friend } = res.locals;
    return res.json({ updated, friend });
  }
);

// adds friend request to dB
// (:id param is user ID sending friend request)
router.post(
  "/friend/request/:id",
  friendController.send,
  (req: Request, res: Response, next: NextFunction) => {
    return res.locals.request
      ? res.json(res.locals.request)
      : res.status(404).send("Friend request failed");
  }
);

// updates and returns updated user
router.put(
  "/:id",
  userController.put,
  (req: Request, res: Response, next: NextFunction) => {
    return res.json(res.locals.user);
  }
);

// deletes user
router.delete(
  "/:id",
  userController.del,
  (req: Request, res: Response, next: NextFunction) => {
    return res.send("User deleted");
  }
);

// deletes a friendship from dB
// req.params.id : user ID deleting friendship
// req.body.friend : friend ID
router.delete(
  "/friend/:id",
  friendController.del,
  (req: Request, res: Response, next: NextFunction) => {
    return res.send("Friendship deleted");
  }
);

// when a user denies a friend request
// :id is the user denying (friend_id in the dB)
// req.body.friend is user who requested (user_id in dB)
router.delete(
  "/friend/request/:id",
  friendController.deny,
  (req: Request, res: Response, next: NextFunction) => {
    return res.send("Request deleted");
  }
);

export default router;
