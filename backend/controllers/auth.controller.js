import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  //   res.send("signup route");
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    // VALIDATE PASSWORD
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password do not match" });
    }

    // CHECK IF USER EXISTS
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // HASH PASSWORD
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt); // hash password with the salt
    // https://avatar.iran.liara.run/public/boy?username=name

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${fullName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${fullName}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      // Generate JWT Token here
      await generateTokenAndSetCookie(newUser._id, res);
      await newUser.save(); // save user to database
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ message: "User not created" });
    }
  } catch (error) {
    console.log("Error on signup controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = (req, res) => {
  res.send("login route");
};

export const logout = (req, res) => {
  res.send("logout route");
};
