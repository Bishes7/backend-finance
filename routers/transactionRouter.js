import express from "express";
import {
  deleteTransactions,
  getTransaction,
  insertTransaction,
} from "../models/transaction/TransactionModel.js";

const router = express.Router();

// Insert transaction
router.post("/", async (req, res, next) => {
  try {
    const { _id } = req.userInfo;
    req.body.userid = _id; //attaching the user id
    const result = await insertTransaction(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "New transactions has been added successfully",
        })
      : res.json({
          status: "errror",
          message: error.message,
        });
  } catch (error) {
    console.log(error);
  }
});

// Get Transaction
router.get("/", async (req, res) => {
  try {
    const { _id } = req.userInfo;
    const transaction = (await getTransaction(_id)) || [];

    res.json({
      status: "success",
      message: "Your transactions",
      transaction,
    });
  } catch (error) {
    console.log(error);
  }
});

// Delete Transaction
router.delete("/", async (req, res) => {
  try {
    // receive[ids] and _id of the user
    const ids = req.body;
    const { _id } = req.userInfo; // this is user id
    console.log(ids, _id);

    // perform the deletion query

    const deletedTransactions = await deleteTransactions(_id, ids);
    res.json({
      status: "success",
      message:
        deletedTransactions.deletedCount + " transactions has been deleted",
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
