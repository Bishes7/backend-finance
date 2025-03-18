import jwt from "jsonwebtoken";

export const signJWT = (obj) => {
  const token = jwt.sign(obj, process.env.JWT_KEY, {
    expiresIn: "1d",
  });
  return token;
};

// Verifying the JWT Token

export const VerifyJWT = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_KEY);
  } catch (error) {
    return error.message;
  }
};
