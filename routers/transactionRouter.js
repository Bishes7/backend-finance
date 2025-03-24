import express from "express";
import {
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

export default router;
