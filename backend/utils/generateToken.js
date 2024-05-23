/**
 * Generates a JWT token and sets it as a cookie in the response object.
 * @param {string} userid - The user ID to be included in the token payload.
 * @param {object} res - The response object to set the cookie in.
 */
import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userid, res) => {
  // generate JWT token by signing the user ID
  const token = jwt.sign({ userid }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks
    sameeSite: "strict", // CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development", // cookie only works in https
  });
};

export default generateTokenAndSetCookie;
