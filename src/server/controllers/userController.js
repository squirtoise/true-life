const UserDB = require("../models/userModel");

const userController = {};

userController.getUsers = (req, res, next) => {
  UserDB.find({}, (err, users) => {
    if (err) {
      return next("Error in userController.getUsers: " + JSON.stringify(err));
    }
    // adds received users to res.locals for further use
    res.locals.users = users;
    console.log("Users received from database");
    return next();
  });
};

userController.getUser = (req, res, next) => {
  UserDB.findOne({ handle: req.body.handle }, (err, user) => {
    if (user !== null) {
      res.locals.user = user;
      return next();
    } else
      return next("Error in userController.getUser: " + JSON.stringify(err));
  });
};

userController.createUser = (req, res, next) => {
  // checks if unique user handle is already in use
  UserDB.findOne({ handle: req.body.handle }, (findErr, findRes) => {
    if (findErr) {
      return next("Error in userController.createUser: " + JSON.stringify(err));
    }
    if (findRes === null) {
      if (
        req.body.handle &&
        req.body.firstName &&
        req.body.lastName &&
        req.body.service &&
        req.body.zip &&
        req.body.hourly
      ) {
        const newUser = {
          handle: req.body.handle,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          service: req.body.service,
          zip: req.body.zip,
          hourly: req.body.hourly,
        };

        UserDB.create(newUser, (err, user) => {
          if (err) {
            return next(
              "Error in userController.createUser: " + JSON.stringify(err)
            );
          }
          console.log(newUser.handle + " has been stored in the database.");
          return next();
        });
      } else return next("All fields are required to add a user.");
    } else return next("This username is already in use.");
  });
};

// updates user with fields from req.body.update (handle, first, last, svc, rate, zip)
userController.updateUser = (req, res, next) => {
  if (!req.body.update)
    return next(
      "At least one field is required in the request body's update property."
    );

  UserDB.findOneAndUpdate(
    { handle: req.query.user },
    req.body.update,
    null,
    (err, user) => {
      if (err)
        return next(
          "Error finding user in userController.User: " + JSON.stringify(err)
        );
      if (!user)
        return next("The handle given in request query does not exist.");

      console.log(req.query.user + " has been updated with the given fields.");
      return next();
    }
  );
};

userController.deleteUser = (req, res, next) => {
  UserDB.findOne({ handle: req.query.user }, (err, user) => {
    if (err)
      return next(
        "Error finding user in userController.deleteUser: " +
          JSON.stringify(err)
      );
    if (!user) return next("User not found");

    UserDB.deleteOne({ handle: user.handle }, (err, result) => {
      if (err)
        return next(
          "Error deleting user in userController.deleteUser: " +
            JSON.stringify(err)
        );
      console.log(user.handle + " deleted from database");
      return next();
    });
  });
};

module.exports = userController;
