// db.js

const mongoose = require("mongoose");
require("dotenv").config();

//const db ="mongodb+srv://btj0392:raZnzS74vmlmCWzz@cluster0.ex7riog.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
/* Replace <password> with your database password */

//mongodb+srv://btj0392:<password>@cluster0.ex7riog.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;