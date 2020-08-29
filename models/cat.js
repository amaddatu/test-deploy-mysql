// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var cat = {
  read: () => orm.read("cats"),
  // The variables cols and vals are arrays.
  create: (cols, vals) => orm.create("cats", cols, vals),
  update: (objColVals, condition) => orm.update("cats", objColVals, condition),
  delete: condition => orm.delete("cats", condition)
};

// Export the database functions for the controller (catsController.js).
module.exports = cat;
