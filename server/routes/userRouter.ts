import express from "express";
import userController from "../controllers/userController";

const router = express.Router();

// returns array of all user objects
router.get("/all");

// returns one user object
router.get("/:id");

// returns array of user's friends (user objects)
router.get("/friends/:id");

// creates and returns new user
router.post("/");

// mutually adds two users to each others' friend lists
// (id specified is user adding the friend)
router.post("/friends/:id");

// updates and returns updated user
router.put("/:id");

// deletes user
router.delete("/:id");

// deletes a user from another user's friends list
// (id specified is user deleting the friend)
router.delete("/:id");

export default router;
