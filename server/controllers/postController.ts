import { Request, Response, NextFunction } from 'express';
import db from '../scripts/dbModel';
import queries from '../scripts/dbQueries';

const postController: any = {};

// queries DB for all posts, saves returned post array to res.locals
postController.all = async (req: Request, res: Response, next: NextFunction) => {
    let result: any;

    try {
        result = await db.query(queries.getAllPosts);
    } catch (err) {
        console.log(err);
        return res.status(500).send('DB Error:' + err);
    }

    if (result.rows.length > 0) {
        res.locals.posts = result.rows;
        return next();
    } else return res.status(404).send('No posts found in DB');
};

// queries DB for a user's posts, saves returned post array to res.locals
postController.user = async (req: Request, res: Response, next: NextFunction) => {
    let result: any;

    try {
        result = await db.query(queries.getUserPosts, [req.params.id]);
    } catch (err) {
        console.log(err);
        return res.status(500).send('DB Error:' + err);
    }

    if (result.rows.length > 0) {
        res.locals.posts = result.rows;
        return next();
    } else res.status(404).send('No user posts found in DB, either user ID is wrong or user has no posts');
};

// TEST THIS
// queries DB for a user's friends' posts, saves returned post array to res.locals
postController.friends = async (req: Request, res: Response, next: NextFunction) => {
    let result: any;

    try {
        result = await db.query(queries.getFriendPosts, [req.params.id]);
    } catch (err) {
        console.log(err);
        return res.status(500).send('DB Error:' + err);
    }

    if (result.rows.length > 0) {
        res.locals.posts = result.rows;
        return next();
    } else
        return res
            .status(404)
            .send(
                `No friend posts found in DB, either user ID is wrong, user has no friends, or user's friend's have no posts`
            );
};

// queries DB for one post, saves returned post to res.locals
postController.one = async (req: Request, res: Response, next: NextFunction) => {
    let result: any;

    try {
        result = await db.query(queries.getPost, [req.params.id]);
    } catch (err) {
        console.log(err);
        return res.status(500).send('DB Error:' + err);
    }

    if (result.rows.length > 0) {
        res.locals.post = result.rows[0];
        return next();
    } else return res.status(404).send('Post not found in DB, double check post ID provided is correct');
};

// adds new post to DB, saves returned post to res.locals
// functionality added to pull filename from req.file and add it to DB field
postController.new = async (req: Request, res: Response, next: NextFunction) => {
    const { caption } = req.body;
    const userID = req.params.id;

    // if picture (base64) is included in body
    if (req.body.picture) {
        let result: any;
        const params: any[] = [userID, caption ? caption : null, new Date().toISOString().slice(0, -5)];

        // add post data to DB (sans image filename.ext, see below)
        try {
            result = await db.query(queries.createPost, params);
        } catch (err) {
            console.log(err);
            return res.status(500).send('DB Error:' + err);
        }

        // if the post data is returned (no errors)
        if (result.rows.length > 0) {
            // get new post ID from result
            const postID = result.rows[0].id;
            // get file extension of picture (base64)
            const type = req.body.picture.split(';')[0].split('/')[1];

            // add image filename.ext to DB (with post ID)
            try {
                result = await db.query(queries.updatePostImage, [
                    postID,
                    `user-${req.params.id}_post-${postID}.${type}`,
                ]);
            } catch (err) {
                console.log(err);
                return res.status(500).send('DB Error:' + err);
            }

            // if post data is returned
            if (result.rows.length > 0) {
                res.locals.post = result.rows[0];
                return next();
            } else return res.status(500).send('DB Error: Updating post with S3 bucket filename failed');
        } else return res.status(500).send('DB Error: Creating post failed');
    } else return res.status(400).send('Picture (base64) required in post body');
};

// updates post's caption in DB, saves returned post to res.locals
postController.put = async (req: Request, res: Response, next: NextFunction) => {
    const { caption } = req.body;

    if (caption) {
        let result: any;

        try {
            result = await db.query(queries.updatePost, [req.params.id, caption]);
        } catch (err) {
            console.log(err);
            return res.status(500).send('DB Error:' + err);
        }

        if (result.rows.length > 0) {
            res.locals.post = result.rows[0];
            return next();
        } else return res.status(500).send('DB Error: Updating post failed');
    } else return res.status(400).send('Caption not included in body');
};

// deletes post from DB
postController.del = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await db.query(queries.deletePost, [req.params.id]);
    } catch (err) {
        console.log(err);
        return res.status(500).send('DB Error:' + err);
    }
    return next();
};

export default postController;
