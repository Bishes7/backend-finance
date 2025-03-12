import express from "express";
import { addUser } from "../models/user/UserModels.js";
import { hashPassword } from "../models/user/utils/bcrypt.js";

const router = express.Router();

// user signup
router.post("/", async (req, res, next) => {
  try {
    req.body.password = hashPassword(req.body.password);

    const users = await addUser(req.body);

    users?._id
      ? res.json({
          status: "success",
          message: "Your account has been created",
        })
      : res.json({
          status: "error",
          message: "Error creating the account",
        });
  } catch (error) {
    let msg = error.message;
    if (msg.includes("E11000 duplicate key error collection")) {
      msg =
        "Account with this Email ID already exists, please try with different Email";
    }
    res.json({
      status: "error",
      message: msg,
    });
  }
});

// user login
router.post("/login", (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    if (email && password) {
      res.json({
        status: "success",
        message: "user logined",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

// user profile

export default router;
