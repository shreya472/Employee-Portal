const connection = require("../utilities/connections");

const usersDB = {};

usersDB.getAllUser = () => {
  return connection.getUserCollection().then((userModel) => {
    return userModel.find({}, { _id: 0, _v: 0 }).then((allUsers) => {
      if (allUsers) return allUsers;
      else {
        let error = new Error("Unable to get all User");
        error.status = 500;
        throw error;
      }
    });
  });
};

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

usersDB.deleteUser = (id) => {
  return connection.getUserCollection().then((userModel) => {
    return userModel.deleteOne({ userid: id }).then((deleteData) => {
      //console.log(deleteData);
      if (deleteData.deletedCount > 0) {
        return "User Deleted Successfully";
      } else {
        let error = new Error("Unable to Delete User");
        error.status = 404;
        throw error;
      }
    });
  });
};

module.exports = usersDB;
