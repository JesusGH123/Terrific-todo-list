import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const makeConnection = () => {
    mongoose.connect(process.env.CONNECTION_STRING)
      .then(() => console.log("MongoDB connected!"))
      .catch(err => console.log(err));
}