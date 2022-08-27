import { Request, Response, NextFunction } from 'express';

import db from '../scripts/dbModel';
import queries from '../scripts/dbQueries';

const commentController: any = {};

// queries DB for all post's comments, saves returned comment array to res.locals
commentController.all = async (req: Request, res: Response, next: NextFunction) => {
    let result: any;
    try {
        result = await db.query(queries.getComments, [req.params.id]);
    } catch (err) {
        console.log(err);
        return res.status(500).send('DB Error:' + err);
    }
    if (result.rows.length > 1) {
        res.locals.comments = result.rows;
        return next();
    } else return res.status(404).send('No comments found under specified post ID');
};

// queries DB for all a user's comments, saves returned comment array to res.locals
// req.query.id : ID of user whose comments are requested
commentController.user = async (req: Request, res: Response, next: NextFunction) => {
    let result: any;
    try {
        result = await db.query(queries.getUserComments, [req.query.id]);
    } catch (err) {
        console.log(err);
        return res.status(500).send('DB Error:' + err);
    }
    if (result.rows.length > 1) {
        res.locals.comments = result.rows;
        return next();
    } else return res.status(404).send('No comments found under specified post ID');
};

// adds new comment to DB, saves returned comment to res.locals
commentController.new = async (req: Request, res: Response, next: NextFunction) => {
    const { creator, content } = req.body;
    const params = [req.params.id, creator, content, new Date().toISOString().slice(0, -5)];

    let result: any;
    try {
        result = await db.query(queries.addComment, params);
    } catch (err) {
        console.log(err);
        return res.status(500).send('DB Error:' + err);
    }

    if (result.rows.length > 0) {
        res.locals.comment = result.rows[0];
        return next();
    } else return res.status(500).send('DB Error: New comment not returned in query result');
};

// updates comment in DB, saves returned comment to res.locals
commentController.put = async (req: Request, res: Response, next: NextFunction) => {
    const { content } = req.body;
    let result: any;

    try {
        result = await db.query(queries.updateComment, [req.params.id, content]);
    } catch (err) {
        console.log(err);
        return res.status(500).send('DB Error:' + err);
    }

    if (result.rows.length > 0) {
        res.locals.comment = result.rows[0];
        return next();
    } else return res.status(500).send('DB Error: Updated comment not returned in query result');
};

// deletes comment from DB
// req.params.id : comment ID
commentController.del = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await db.query(queries.deleteComment, [req.params.id]);
    } catch (err) {
        console.log(err);
        return res.status(500).send('DB Error:' + err);
    }
    return next();
};

export default commentController;
