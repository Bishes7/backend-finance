import mongoose from "mongoose";

const transactionSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    tdate: {
      type: Date,
      required: true,
    },

    userid: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Transactions", transactionSchema);
