import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB Connection Error");
    process.exit(1);
  }
};
