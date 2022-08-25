import express from "express";

const router = express.Router();

// returns array of all posts
router.get("/");

// returns array of all a post's comments
router.get("/comment/:id");

// returns array of all a user's posts
router.get("/user/:id");

// returns array of all user's friends' posts
router.get("/friends/:id");

// returns a post
router.get("/:id");

// creates a post and returns new post
// (id specified is user creating post)
router.post("/:id");

// creates a comment and returns new comment
// (id specified is post to be commented on)
router.post("/comment/:id");

// updates a post and returns updated post
router.put("/:id");

// updates a comment on a post
// (id specified is of comment to be updated)
router.put("/comment/:id");

// deletes a post
router.delete("/:id");

// deletes a comment
router.delete("/comment/:id");

export default router;
