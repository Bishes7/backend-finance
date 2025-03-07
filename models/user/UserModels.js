import UserSchema from "./UserSchema.js";

// CRUD OPERATIONS

export const addUser = (userobj) => {
  return UserSchema(userobj).save();
};
