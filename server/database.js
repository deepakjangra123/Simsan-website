const mongoose = require("mongoose");

const conn = mongoose.connect("mongodb://localhost:27017/employees");

if (conn) {
  console.log("database connected");
} else {
  console.log("not connected");
}
