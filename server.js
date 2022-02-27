const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv").config();

// database connection
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tania-mongoose:rUMfSUfwdvHykKF3@cluster0.xay8a.mongodb.net/mongoosecrud?retryWrites=true&w=majority"
    );

    console.log("DB connected");
  } catch (error) {
    console.log("DB not connected");
  }
};
connectDB();
app.listen(7000, () => {
  console.log("App is running on the port at 7000");
});
