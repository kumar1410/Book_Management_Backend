import mongoose from "mongoose";


export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection error", error);
  }
};
