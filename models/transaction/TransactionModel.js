import TransactionSchema from "./TransactionSchema.js";

// CRUD

// Post Method
export const insertTransaction = (obj) => {
  return TransactionSchema(obj).save();
};

// Get Method
export const getTransaction = (userid) => {
  return TransactionSchema.find({ userid });
};

// Delete Method
export const deleteTransactions = (userid, idsToDelete) => {
  return TransactionSchema.deleteMany({ userid, _id: { $in: idsToDelete } });
};
