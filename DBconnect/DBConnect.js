import mongoose from "mongoose";

const mongoURl = "mongodb://127.0.0.1:27017/financeTracker";

export const connectDB = async () => {
  try {
    const mongoDBConnect = await mongoose.connect(mongoURl);
    mongoDBConnect && console.log("Database is connected");
  } catch (error) {
    console.log(error);
  }
};
