import express from "express";
import { addUser, getUserByEmail } from "../models/user/UserModels.js";
import { comparePassword, hashPassword } from "../utils/bcrypt.js";
import { signJWT } from "../utils/jwt.js";
import { auth } from "../middleware/authMiddleware.js";

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
router.post("/login", async (req, res, next) => {
  try {
    // 1.  receive email and password
    const { email, password } = req.body;

    if (email && password) {
      //  2. Find the user by email
      const user = await getUserByEmail(email);

      if (user?._id) {
        // 3.Match the password of database and sent by client
        const passwordMatched = comparePassword(password, user.password);
        if (passwordMatched) {
          const accessToken = signJWT({ email });

          user.password = undefined;
          res.json({
            status: "success",
            message: "user logined",
            user,
            accessToken,
          });
          return;
        }
        // JWT token
      }
    }
    res.status(401).json({
      error: "Invalid login or password",
    });
  } catch (error) {
    next(error);
  }
});

// user profile from accessJWT
router.get("/", auth, (req, res, next) => {
  try {
    const user = req.userInfo;
    res.json({
      status: "success",
      message: "here is the user profile",
      user,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
