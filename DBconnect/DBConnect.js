import mongoose from "mongoose";

const mongoURl = process.env.MONGO_URL;

export const connectDB = async () => {
  try {
    const mongoDBConnect = await mongoose.connect(mongoURl);
    mongoDBConnect && console.log("Database is connected");
  } catch (error) {
    console.log(error);
  }
};
