import express, { Request, Response, NextFunction } from "express";
import db from "../scripts/dbModel";
import queries from "../scripts/dbQueries";

const userController: any = {};

// queries DB for all users, saves returned user array to res.locals
userController.all = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const queryResult: any = await db.query(queries.getAllUsers);
  res.locals.users = queryResult.rows;
  return next();
};

// queries DB for one user, saves returned user to res.locals
// uses req.params.id to specify user ID
userController.one = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const queryResult: any = await db.query(queries.getUser, [req.params.id]);
  res.locals.user = queryResult.rows[0];
  return next();
};

// adds new user to DB, saves returned user to res.locals
userController.new = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // window format is ex. '13:30' (1:30PM);
  const { email, password, first, last, window } = req.body;
  const params: any[] = [
    email,
    password,
    first,
    last,
    window,
    new Date().toISOString().slice(0, -5),
  ];
  const queryResult: any = await db.query(queries.createUser, params);

  res.locals.user = queryResult.rows[0];
  return next();
};

// updates user in DB, saves returned user to res.locals
userController.put = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // grab current user data
  const queryResult: any = await db.query(queries.getUser, [req.params.id]);
  if (queryResult.rows > 0) {
    const {
      oldEmail,
      oldPassword,
      oldFirst,
      oldLast,
      oldStreak,
      oldWindow,
      oldAvatar,
    } = queryResult.rows[0];
    let { email, password, first, last, streak, window, avatar } = req.body;

    // if req.body doesn't specify these data types, keep them as they were
    email = email ? email : oldEmail;
    password = password ? password : oldPassword;
    first = first ? first : oldFirst;
    last = last ? last : oldLast;
    streak = streak ? streak : oldStreak;
    window = window ? window : oldWindow;
    avatar = avatar ? avatar : oldAvatar;

    const updateUser: any = db.query(queries.updateUser, [req.params.id]);
    res.locals.user = updateUser.rows[0];
    return next();
  } else return res.status(404).send("User does not exist in dB");
};

// deletes user from DB
userController.del = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await db.query(queries.deleteUser, [req.params.id]);
  return next();
};

export default userController;
