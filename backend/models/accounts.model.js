import mongoose, { Schema } from "mongoose";
const accountSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    required: true,
    type: Number,
  },
});

export const Account = mongoose.model("Account", accountSchema);
