import express from 'express';
import userController from '../controllers/userController';
import friendController from '../controllers/friendController';
const router = express.Router();
// returns array of all user objects
router.get('/', userController.all, (req, res, next) => {
    return res.locals.users ? res.json(res.locals.users) : res.status(404).send('No users in DB');
});
// returns one user object
// req.params.id : userID
router.get('/:id', userController.one, (req, res, next) => {
    return res.locals.user
        ? res.json(res.locals.user)
        : res.status(404).send('User not found, check ID validity');
});
// returns array of user's friends (user objects)
// req.params.id : ID of user whose friends are requested
router.get('/friend/:id', friendController.all, (req, res, next) => {
    return res.json(res.locals.friends);
});
// returns array of user's friend requests (user objects)
// req.params.id : ID of user whose friend reqs are requested
// req.query.reqs : 'sent' or 'received' must be specified
router.get('/req/:id', friendController.requests, (req, res, next) => {
    return res.json(res.locals.requests);
});
// creates and returns new user
router.post('/', userController.new, (req, res, next) => {
    return res.json(res.locals.user);
});
// adds friend request to dB
// req.params.id : ID of user sending friend request
// req.body.friend : ID of user receiving request
router.post('/req/:id', friendController.send, (req, res, next) => {
    return res.locals.request ? res.json(res.locals.request) : res.status(404).send('Friend request failed');
});
// when a user accepts a friend request
// req.params.id : ID of user accepting the friend request
// req.body.friend : ID of friend who sent the request
router.post('/friend/:id', friendController.new, (req, res, next) => {
    // returns the updated friendship row, and the new friendship row
    const { updated, friend } = res.locals;
    return res.json({ updated, new: friend });
});
// updates and returns updated user
// req.params.id : ID of user to be updated
router.put('/:id', userController.put, (req, res, next) => {
    return res.json(res.locals.user);
});
// deletes user
// req.params.id : ID of user to be deleted
router.delete('/:id', userController.del, (req, res, next) => {
    return res.send('User deleted');
});
// deletes a friendship from dB
// req.params.id : ID of user deleting friendship
// req.body.friend : friend ID
router.delete('/friend/:id', friendController.del, (req, res, next) => {
    return res.send('Friendship deleted');
});
// when a user denies a friend request
// req.params.id : ID of user denying req (friend_id in dB row)
// req.body.friend : ID of user who requested (user_id in dB row)
router.delete('/req/:id', friendController.deny, (req, res, next) => {
    return res.send('Request deleted');
});
export default router;
