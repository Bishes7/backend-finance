import UserSchema from "./UserSchema.js";

// CRUD OPERATIONS

export const addUser = (userobj) => {
  return UserSchema(userobj).save();
};

// User login
export const getUserByEmail = (email) => {
  return UserSchema.findOne({ email });
};
