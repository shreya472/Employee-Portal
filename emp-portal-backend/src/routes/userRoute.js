const express = require("express");
const router = express.Router();
const users = require("../utilities/users");
const userModel = require("../model/userModel");

router.post("/addUser", (req, res, next) => {
  let userDetailObj = new users(req.body);
  userModel
    .addNewUser(userDetailObj)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => next(err));
});

router.get("/allUser", (req, res, next) => {
  userModel
    .getAllUser()
    .then((allUser) => {
      res.json(allUser);
    })
    .catch((err) => next(err));
});

router.delete("/deleteUser/:id", (req, res, next) => {
  let userIdToDelete = Number(req.params.id);
  userModel
    .deleteUser(userIdToDelete)
    .then((deleteMessage) => {
      res.send(deleteMessage);
    })
    .catch((err) => next(err));
});
module.exports = router;
