import TransactionSchema from "./TransactionSchema.js";

// CRUD
// Post Method

export const insertTransaction = (obj) => {
  return TransactionSchema(obj).save();
};
