const express = require("express");
const app = express();
const taskRoute = require("./routes/taskRoute");

const connectDb = require("./config/dbConnection");
connectDb();

require("dotenv").config();
const port = process.env.PORT || 7000;

app.use(express.json());
app.use("/api/taskRoute", taskRoute);

app.listen(port, () => {
  console.log("Server is running on Port : ", port);
});
