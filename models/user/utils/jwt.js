import jwt from "jsonwebtoken";

export const signJWT = (obj) => {
  const token = jwt.sign(obj, process.env.JWT_KEY, {
    expiresIn: "1d",
  });
  return token;
};
