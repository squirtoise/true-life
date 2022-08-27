import bcrypt from 'bcrypt';
import db from '../scripts/dbModel';
import queries from '../scripts/dbQueries';
const saltRounds = 10;
const userController = {};
// queries DB for all users, saves returned user array to res.locals
userController.all = async (req, res, next) => {
    let result;
    try {
        result = await db.query(queries.getAllUsers);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send('DB Error:' + err);
    }
    res.locals.users = result.rows;
    return next();
};
// queries DB for one user, saves returned user to res.locals
// uses req.params.id to specify user ID
userController.one = async (req, res, next) => {
    let result;
    try {
        result = await db.query(queries.getUser, [req.params.id]);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send('DB Error:' + err);
    }
    res.locals.user = result.rows[0];
    return next();
};
// adds new user to DB, saves returned user to res.locals
userController.new = async (req, res, next) => {
    // window format is ex. '13:30' (1:30PM);
    const { email, password, first, last, window } = req.body;
    const hash = await bcrypt.hash(password, saltRounds).catch((err) => {
        if (err) {
            console.log(`Server hashing error: ${err}`);
            return res.status(500).send('Server hashing error');
        }
    });
    // makes sure all necessary body fields are included
    if (email && password && first && last && window) {
        const params = [email, hash, first, last, window, new Date().toISOString().slice(0, -5)];
        let result;
        try {
            result = await db.query(queries.createUser, params);
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('DB Error:' + err);
        }
        res.locals.user = result.rows[0];
        return next();
    }
    else
        return res.status(400).send('Missing field(s) in body');
};
// updates user in DB, saves returned user to res.locals
userController.put = async (req, res, next) => {
    let result;
    try {
        result = await db.query(queries.getUser, [req.params.id]);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send('DB Error:' + err);
    }
    if (result.rows.length > 0) {
        const { email: oldEmail, password: oldPassword, first_name: oldFirst, last_name: oldLast, streak: oldStreak, window_start: oldWindow, avatar: oldAvatar, } = result.rows[0];
        let { email, password, first, last, streak, window, avatar } = req.body;
        // if req.body doesn't specify these data types, keep them as they were
        email = email ? email : oldEmail;
        first = first ? first : oldFirst;
        last = last ? last : oldLast;
        streak = streak ? streak : oldStreak;
        window = window ? window : oldWindow;
        avatar = avatar ? avatar : oldAvatar;
        let hash = null;
        if (password) {
            hash = await bcrypt.hash(password, saltRounds);
        }
        else {
            password = oldPassword;
        }
        const params = [req.params.id, email, hash ? hash : password, first, last, streak, window, avatar];
        let updateUser;
        try {
            updateUser = await db.query(queries.updateUser, params);
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('DB Error:' + err);
        }
        res.locals.user = updateUser.rows;
        return next();
    }
    else
        return res.status(404).send('User does not exist in dB');
};
// deletes user from DB
userController.del = async (req, res, next) => {
    try {
        await db.query(queries.deleteUser, [req.params.id]);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send('DB Error:' + err);
    }
    return next();
};
export default userController;
