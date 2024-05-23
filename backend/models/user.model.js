/**
 * Represents the user schema for the chat application.
 *
 * @typedef {Object} UserSchema
 * @property {string} fullName - The full name of the user.
 * @property {string} username - The username of the user.
 * @property {string} password - The password of the user.
 * @property {string} gender - The gender of the user. Can be either "male" or "female".
 * @property {string} profilePic - The profile picture of the user. Defaults to an empty string.
 */

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
