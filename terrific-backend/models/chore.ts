import mongoose from 'mongoose';

const choreSchema = new mongoose.Schema({
    _id: String,
    name: String,
    done: Boolean
});
export const ChoreModel = mongoose.model("Chore", choreSchema);