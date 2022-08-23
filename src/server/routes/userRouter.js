const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

// route to get local listings of freelancers
// middleware: getUsers
// sends back response body of users

router.get('/', userController.getUsers, (req, res)=>{
    return res.json(res.locals.users);
})

// route to post a new freelancer to listings
// sends back response body of users

router.post('/', userController.createUser, userController.getUsers, (req, res)=>{
    return res.json(res.locals.users);
})

// route to update an existing freelancer
// sends back response body of users

router.put('/', userController.updateUser, userController.getUsers, (req, res)=>{
    return res.json(res.locals.users);
})

// route to delete an existing freelancer
// sends back response body of users

router.delete('/', userController.deleteUser, userController.getUsers, (req, res)=>{
    return res.json(res.locals.users);
})

module.exports = router;