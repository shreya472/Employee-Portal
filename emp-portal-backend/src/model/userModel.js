const connection = require("../utilities/connections");

const usersDB = {};

usersDB.addNewUser = (userDetails) => {
  return connection.getUserCollection().then((userModel) => {
    return userModel.create(userDetails).then((insertedData) => {
      if (insertedData) {
        return insertedData;
      } else {
        let error = new Error("Unable to Add User");
        error.status = 404;
        throw error;
      }
    });
  });
};

module.exports = usersDB;
