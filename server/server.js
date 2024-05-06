const express = require("express");
const app = express();
const userRoute = require("./Routes/userRoute");
require("./database");
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", userRoute);
app.listen(5500, () => {
  console.log("server is running on port no 5500");
});
