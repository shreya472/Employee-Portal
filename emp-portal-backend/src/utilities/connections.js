const { Schema } = require("mongoose");
const Mongoose = require("mongoose");
Mongoose.Promise = global.Promise;
const url = "mongodb://localhost:27017/User_Create_Delete";

let userSchema = Schema(
  {
    userid: Number,
    name: String,
    email: String,
    address: String,
    doj: String,
  },
  { collection: "User" }
);

let collection = {};

collection.getUserCollection = () => {
  return Mongoose.connect(url, { useNewUrlParser: true })
    .then((database) => {
      return database.model("User", userSchema);
    })
    .catch((error) => {
      let err = new Error("Could not connect to Database");
      err.status = 500;
      throw err;
    });
};

module.exports = collection;
