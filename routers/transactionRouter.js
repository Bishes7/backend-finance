import express from "express";

const router = express.Router();

// Insert transaction
router.post("/", (req, res, next) => {
  try {
    const { _id } = req.userInfo;
    req.body.userid = _id; //attaching the user id to req.body
    console.log(req.body);
    res.json({
      status: "success",
      message: "transaction successfullu added",
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
