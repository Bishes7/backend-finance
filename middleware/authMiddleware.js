import { getUserByEmail } from "../models/user/UserModels.js";
import { VerifyJWT } from "../utils/jwt.js";

export const auth = async (req, res, next) => {
  try {
    // receive token
    const { authorization } = req.headers;

    const result = VerifyJWT(authorization);

    // vaidate if the token is correct
    if (result?.email) {
      const userMail = await getUserByEmail(result.email);
      if (userMail?._id) {
        userMail.password = undefined;
        // user is authorized

        // store user info in req.headers
        req.userInfo = userMail;
        return next();
      }
    }

    // get user email from the token
    // get user by email
    res.status(403).json({
      error: "Unauthorized",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
