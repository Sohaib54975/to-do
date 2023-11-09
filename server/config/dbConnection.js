const mongoose = require("mongoose");
require("dotenv").config();
const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Coonnection Established Successfully");
  } catch (error) {
    console.log("Error to Connect DB : ", error);
  }
};

module.exports = connectDb;
