import db from "../scripts/dbModel";
import queries from "../scripts/dbQueries";
const postController = {};
// queries DB for all posts, saves returned post array to res.locals
postController.all = async (req, res, next) => {
    let result;
    try {
        result = await db.query(queries.getAllPosts);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send("DB Error:" + err);
    }
    if (result.rows.length > 0) {
        res.locals.posts = result.rows;
        return next();
    }
    else
        return res.status(404).send("No posts found in DB");
};
// queries DB for a user's post, saves returned post array to res.locals
postController.user = async (req, res, next) => {
    let result;
    try {
        result = await db.query(queries.getUserPosts, [req.params.id]);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send("DB Error:" + err);
    }
    if (result.rows.length > 0) {
        res.locals.posts = result.rows[0];
        return next();
    }
    else
        res.status(404).send("No user posts found in DB");
};
// TEST THIS
// queries DB for a user's friends' posts, saves returned post array to res.locals
postController.friends = async (req, res, next) => {
    let result;
    try {
        result = await db.query(queries.getFriendPosts, [req.params.id]);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send("DB Error:" + err);
    }
    if (result.rows.length > 0) {
        res.locals.posts = result.rows[0];
        return next();
    }
    else
        return res.status(404).send("No friend posts found in DB");
};
// queries DB for one post, saves returned post to res.locals
postController.one = async (req, res, next) => {
    let result;
    try {
        result = await db.query(queries.getPost, [req.params.id]);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send("DB Error:" + err);
    }
    if (result.rows.length > 0) {
        res.locals.post = result.rows[0];
        return next();
    }
    else
        return res.status(404).send("Post not found in DB");
};
// adds new post to DB, saves returned post to res.locals
postController.new = async (req, res, next) => {
    const { picture, caption } = req.body;
    if (picture && caption) {
        let result;
        const params = [
            req.params.id,
            picture,
            caption,
            new Date().toISOString().slice(0, -5),
        ];
        try {
            result = await db.query(queries.createPost, params);
        }
        catch (err) {
            console.log(err);
            return res.status(500).send("DB Error:" + err);
        }
        if (result.rows.length > 0) {
            res.locals.post = result.rows[0];
            return next();
        }
        else
            return res.status(500).send("DB Error: Creating post failed");
    }
    else
        return res.status(400).send("Picture and/or caption not included in body");
};
// updates post's caption in DB, saves returned post to res.locals
postController.put = async (req, res, next) => {
    const { caption } = req.body;
    if (caption) {
        let result;
        try {
            result = await db.query(queries.updatePost, [req.params.id, caption]);
        }
        catch (err) {
            console.log(err);
            return res.status(500).send("DB Error:" + err);
        }
        if (result.rows.length > 0) {
            res.locals.post = result.rows[0];
            return next();
        }
        else
            return res.status(500).send("DB Error: Updating post failed");
    }
    else
        return res.status(400).send("Caption not included in body");
};
// deletes post from DB
postController.del = async (req, res, next) => {
    try {
        await db.query(queries.deletePost, [req.params.id]);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send("DB Error:" + err);
    }
    return next();
};
export default postController;
