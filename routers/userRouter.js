import express from "express";
import { addUser } from "../models/user/UserModels.js";
import { hashPassword } from "../models/user/utils/bcrypt.js";

const router = express.Router();

// user signup
router.post("/", async (req, res, next) => {
  req.body.password = hashPassword(req.body.password);
  try {
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
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

// user login

// user profile

export default router;
