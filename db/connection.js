/**
 * 1. Create connection function for mongodb Atlas
 * 2. Start a cloud based mongodb atlas server connection
 *
 *
 */

const mongoose = require("mongoose");
require("dotenv").config();

const { CONNECTIONSTRING } = process.env;

const connectDb = async () => {
  try {
    await mongoose.connect(CONNECTIONSTRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDb atlas connected...");
  } catch (err) {
    console.error(err.message);

    process.exit(1);
  }
};

module.exports = connectDb;
