import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.youtube_backend}`
    );
    console.log(
      `Database connected successfully with host ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Database connection Failed", error.message);
    process.exit(1);
  }
};

export default connectDB;
