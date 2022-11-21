import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const VeilleSchema = new Schema({
  stop: {
    type: String,
  },
  start: {
    type: String,
  },
  title: {
    type: String,
  },
});
