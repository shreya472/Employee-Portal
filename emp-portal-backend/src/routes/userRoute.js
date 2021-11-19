const express = require("express");
const router = express.Router();
const users = require("../utilities/users");
const userModel = require("../model/userModel");

console.log("Hello");

router.post("/addUser", (req, res, next) => {
  console.log(req.body);
  let userDetailObj = new users(req.body);
  console.log(userDetailObj);
  userModel
    .addNewUser(userDetailObj)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => next(err));
});

module.exports = router;
