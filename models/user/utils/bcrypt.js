import bcrypt from "bcryptjs";

const saltRound = 15;

export const hashPassword = (plainPassword) => {
  return bcrypt.hashSync(plainPassword, saltRound);
};

// Code to compare the password
export const comparePassword = (plainPassword, hashPassword) => {
  return bcrypt.compareSync(plainPassword, hashPassword);
};
