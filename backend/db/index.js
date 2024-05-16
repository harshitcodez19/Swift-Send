import mongoose from "mongoose";
import { DB_NAME } from "../config.js";

export const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      "\n Mongo Db connected Successfully",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("Error occured in Database connection ", error);
  }
};
